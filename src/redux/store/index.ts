import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)) //composeWithDevTools is used here for development purposes. It should be removed for production
);

export type AppState = ReturnType<typeof rootReducer>;
