import React, { FC, ReactChild, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { useDispatch } from "react-redux";
import { iApiResponse } from "../api-manager/apiManagerInterfaces";
import { Dispatch } from "redux";
import { iGetCategoryOptionsActionType } from "../../redux/types/book/bookType";

interface iGlobalProviderProps {
  children: ReactChild;
}
export const GlobalProvider: FC<iGlobalProviderProps> = ({
  children,
}: iGlobalProviderProps) => {
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(false);

  const globalDispatch = async (
    effect: (
      dispatch: Dispatch<iGetCategoryOptionsActionType>
    ) => Promise<iApiResponse>
  ): Promise<void> => {
    const data = await dispatch(effect);
    console.log(data);
  };

  return (
    <GlobalContext.Provider
      value={{ showLoader, setShowLoader, globalDispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
