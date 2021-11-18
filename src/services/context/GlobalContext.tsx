import { createContext } from "react";
import { iApiResponse } from "../api-manager/apiManagerInterfaces";
import { bookActionTypes } from "../../redux/types/book/bookType";
import { Dispatch } from "redux";

export interface iGlobalContext {
  showLoader: boolean;
  globalDispatch: (
    effect: (dispatch: Dispatch<bookActionTypes>) => Promise<iApiResponse>
  ) => Promise<iApiResponse>;
}

export const GlobalContext = createContext({} as iGlobalContext);
