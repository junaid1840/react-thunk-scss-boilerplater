import { Dispatch } from "redux";
import { getCategoryService } from "../../../services/apiServices/getCategoryService";
import { getCategoryDropdownAction } from "../../actions/book/bookAction";
import { iGetCategoryOptionsActionType } from "../../types/book/bookType";
import { customDispatch } from "../../../services/api-manager/apiUtilities";
import { iApiResponse } from "../../../services/api-manager/apiManagerInterfaces";

export const getCategoryDropDownEffect =
  () =>
  async (
    dispatch: Dispatch<iGetCategoryOptionsActionType>
  ): Promise<iApiResponse> => {
    const response = await getCategoryService();
    return customDispatch(
      dispatch(getCategoryDropdownAction(response.response)),
      response
    );
  };
