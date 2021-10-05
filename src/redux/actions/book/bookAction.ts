import {
  GET_CATEGORY_DROPDOWN_ITEMS,
  iGetCategoryOptionsActionType,
} from "../../types/book/bookType";

export const getCategoryDropdownAction = (
  categoryDropdownItems: any
): iGetCategoryOptionsActionType => ({
  type: GET_CATEGORY_DROPDOWN_ITEMS,
  payload: categoryDropdownItems,
});
