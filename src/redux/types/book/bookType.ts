import { iCategoryDropdownOption } from "../../interfaces/interfaces-for-modules/bookInterfaces";

export const GET_CATEGORY_DROPDOWN_ITEMS = "GET_CATEGORY_DROPDOWN_ITEMS";

export interface iBookStateType {
  categoryDropdownOptions: iCategoryDropdownOption[];
}

export interface iGetCategoryOptionsActionType {
  type: typeof GET_CATEGORY_DROPDOWN_ITEMS;
  payload: iCategoryDropdownOption[];
}

export type bookActionTypes = iGetCategoryOptionsActionType;
