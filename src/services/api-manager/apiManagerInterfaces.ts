import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface iErrorHandler {
  [statusCode: number]: (failedRequest: iFailedRequest) => {} | never;
}

export interface iFailedRequest {
  response: AxiosResponse;
  config: AxiosRequestConfig;
}
