import apiManager from "../api-manager/apiManager";
import { iApiResponse } from "../api-manager/apiManagerInterfaces";

export const getCategoryService = async (): Promise<iApiResponse> => {
  const url = `list/categories`;
  const { data } = await apiManager.request(url, {}, "GET");
  return data;
};
