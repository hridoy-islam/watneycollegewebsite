import axios, { AxiosInstance } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
// const API_URL = "https://api.robofxtrader.com/api";

const Axios: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default Axios;
