import {
  bookActionTypes,
  GET_CATEGORY_DROPDOWN_ITEMS,
  iBookStateType,
} from "../../types/book/bookType";

const initialBookState: iBookStateType = {
  categoryDropdownOptions: "",
};

export const bookReducer = (
  state = initialBookState,
  action: bookActionTypes
): iBookStateType => {
  switch (action.type) {
    case GET_CATEGORY_DROPDOWN_ITEMS:
      return {
        ...state,
        categoryDropdownOptions: action.payload,
      };
    default:
      return state;
  }
};
