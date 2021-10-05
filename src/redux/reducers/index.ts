import { combineReducers } from "redux";
import { bookReducer } from "./book/bookReducer";

const rootReducer = combineReducers({
  bookReducer,
});

export default rootReducer;
