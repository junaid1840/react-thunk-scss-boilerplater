import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface iErrorHandler {
  [statusCode: number]: (failedRequest: AxiosResponse<iApiResponse>) => void;
}

export interface iApiResponse {
  response: any;
  error: boolean;
  message: string;
  action: string;
}

export interface iFailedRequest {
  response: AxiosResponse;
  config: AxiosRequestConfig;
}
