import axios, { AxiosInstance } from "axios";

const API_URL = "http://localhost:5001/api";
//const API_URL = "https://api.robofxtrader.com/api";

const Axios: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default Axios;
