import axios, { AxiosInstance, AxiosResponse } from "axios";
import { ApiErrorHandler } from "./apiUtilities";

export const axiosInstance: AxiosInstance = axios.create({
  responseType: "json",
  validateStatus: (status: number) => status >= 200,
  headers: {
    "Content-type": "application/json",
    locale: "en",
  },
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (failedRequest: AxiosResponse) =>
    failedRequest.status === 412 &&
    ApiErrorHandler[failedRequest.status](failedRequest)
);
