import { AxiosResponse } from "axios";

export interface iErrorHandler {
  [statusCode: number]: (failedRequest: AxiosResponse<iApiResponse>) => void;
}

//TODO: Define response type
export interface iApiResponse {
  response: string;
  error: boolean;
  message: string;
  status: number;
}
