import axiosInstance from "./axiosInstance";
import { AxiosResponse } from "axios";

type axiosMethodTypes = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

const apiManager = {
  request: async (
    url: string,
    body: unknown,
    method: axiosMethodTypes
  ): Promise<AxiosResponse | any> => {
    try {
      return axiosInstance({
        method: method,
        url: url,
        data: body,
      });
    } catch (e) {
      throw new Error(e as string);
    }
  },
};
export default apiManager;
