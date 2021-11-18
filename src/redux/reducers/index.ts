import { combineReducers } from "redux";
import { bookReducer } from "./book/bookReducer";

export const rootReducer = combineReducers({
  bookReducer,
});
