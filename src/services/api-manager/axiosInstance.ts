import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ApiErrorHandler } from "./apiUtilities";
import { iFailedRequest } from "./apiManagerInterfaces";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://internal-backend.polinate.io/api/",
  responseType: "json",
  validateStatus: (status: number) => status >= 200 && status < 399,
  headers: {
    "Content-type": "application/json",
    locale: "en",
  },
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (failedRequest: iFailedRequest) =>
    ApiErrorHandler[failedRequest?.response?.data](failedRequest)
);

export default axiosInstance;
