import axios from 'axios';

/**
 * The store reaches this module on its own way up - `store` imports
 * `authSlice`, and `authSlice` imports this file - so importing it back at the
 * top closes the cycle. Whichever of the three the bundler happens to enter
 * first then decides whether it works: come in through `authSlice` (a page
 * that imports `logout` but only the *type* of `AppDispatch`) and `store.ts`
 * is evaluated while `authSlice` is still initialising, leaving `authReducer`
 * undefined - "Cannot access '__WEBPACK_DEFAULT_EXPORT__' before
 * initialization".
 *
 * Both are pulled in on demand instead, from inside the async refresh handler
 * that is the only thing here which needs them, long after every module has
 * finished initialising.
 */
const getAuth = async () => {
  const [{ default: store }, { logout, setToken }] = await Promise.all([
    import('@/redux/store'),
    import('@/redux/features/authSlice')
  ]);

  return { store, logout, setToken };
};

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor: Attach access token to all outgoing requests
axiosInstance.interceptors.request.use(
  (config) => {
    const raw = localStorage.getItem('watney');
    const token = raw ? JSON.parse(raw) : null;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Prevent multiple simultaneous refresh calls with a queue
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const refreshAccessToken = async () => {
  const { store, logout, setToken } = await getAuth();

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refreshToken`,
      {},
      { withCredentials: true } // sends the refresh token cookie
    );

    const accessToken = response?.data?.data?.accessToken;

    if (accessToken) {
      localStorage.setItem('watney', JSON.stringify(accessToken));
      store.dispatch(setToken(accessToken)); // keep Redux in sync
      return accessToken;
    }

    return null;
  } catch {
    // Refresh failed — clear everything and force logout
    localStorage.removeItem('watney');
    store.dispatch(logout()); // plain action, clears Redux state immediately
    return null;
  }
};

// Response interceptor: Handle expired access token and retry original request
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const isTokenExpired =
      error.response?.status === 401 &&
      error.response?.data?.message === 'JWT Expired';

    if (isTokenExpired && !originalRequest._retry) {
      // If already refreshing, queue this request until refresh completes
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const newToken = await refreshAccessToken();
      isRefreshing = false;

      if (newToken) {
        processQueue(null, newToken);
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } else {
        processQueue(error, null);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;