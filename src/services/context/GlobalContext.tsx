import React, { createContext } from "react";
import { iApiResponse } from "../api-manager/apiManagerInterfaces";
import { iGetCategoryOptionsActionType } from "../../redux/types/book/bookType";
import { Dispatch } from "redux";

export interface iGlobalContext {
  showLoader: boolean;
  setShowLoader: React.Dispatch<boolean>;
  globalDispatch: (
    effect: (
      dispatch: Dispatch<iGetCategoryOptionsActionType>
    ) => Promise<iApiResponse>
  ) => Promise<void>;
}

export const GlobalContext = createContext({} as iGlobalContext);
