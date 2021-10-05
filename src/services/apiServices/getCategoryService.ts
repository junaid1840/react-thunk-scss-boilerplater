import apiManager from "../api-manager/apiManager";

export const getCategoryService = async () => {
  const url = `list/categories`;
  const { data } = await apiManager.request(url, {}, "GET");
  return data;
};
