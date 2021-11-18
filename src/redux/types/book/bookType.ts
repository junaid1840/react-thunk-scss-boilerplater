export const GET_CATEGORY_DROPDOWN_ITEMS = "GET_CATEGORY_DROPDOWN_ITEMS";

export interface iBookStateType {
  categoryDropdownOptions: string;
}

export interface iGetCategoryOptionsActionType {
  type: typeof GET_CATEGORY_DROPDOWN_ITEMS;
  payload: string;
}

export type bookActionTypes = iGetCategoryOptionsActionType;
