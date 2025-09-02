import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 10000,
});

httpClient.interceptors.response.use(
  res => res,
  error => {
    return Promise.reject(error);
  }
);
