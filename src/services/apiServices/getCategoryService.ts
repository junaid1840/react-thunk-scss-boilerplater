import { apiManager } from "../api-manager/apiManager";
import { iApiResponse } from "../api-manager/apiManagerInterfaces";

export const successService = async (): Promise<iApiResponse> => {
  const url = `https://3d048452-563b-44d1-8005-758190e56bb1.mock.pstmn.io/success`;
  const { data } = await apiManager.request(url, {}, "GET");
  return data;
};

export const failureService = async (): Promise<iApiResponse> => {
  const url = `https://3d048452-563b-44d1-8005-758190e56bb1.mock.pstmn.io/failed`;
  const { data } = await apiManager.request(url, {}, "GET");
  return data;
};
