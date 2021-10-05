import { Dispatch } from "redux";
import { getCategoryService } from "../../../services/apiServices/getCategoryService";
import { getCategoryDropdownAction } from "../../actions/book/bookAction";
import { iGetCategoryOptionsActionType } from "../../types/book/bookType";

export const getCategoryDropDownEffect =
  () =>
  async (dispatch: Dispatch<iGetCategoryOptionsActionType>): Promise<void> => {
    const data = getCategoryService();
    dispatch(getCategoryDropdownAction(data));
  };
