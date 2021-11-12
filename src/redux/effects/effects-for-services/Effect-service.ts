import { Dispatch } from "redux";
import {
  failureService,
  successService,
} from "../../../services/apiServices/getCategoryService";
import { getCategoryDropdownAction } from "../../actions/book/bookAction";
import { iApiResponse } from "../../../services/api-manager/apiManagerInterfaces";
import { iGetCategoryOptionsActionType } from "../../types/book/bookType";

export const successEffect = async (
  dispatch: Dispatch<iGetCategoryOptionsActionType>
): Promise<iApiResponse> => {
  const data = await successService();
  !data.error && dispatch(getCategoryDropdownAction(data.response));
  return data;
};

export const failureEffect = async (
  dispatch: Dispatch<iGetCategoryOptionsActionType>
): Promise<iApiResponse> => {
  const data = await failureService();
  !data.error && dispatch(getCategoryDropdownAction(data.response));
  return data;
};
