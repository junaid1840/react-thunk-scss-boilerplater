import React, { FC, ReactChild, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { useDispatch } from "react-redux";
import { iApiResponse } from "../api-manager/apiManagerInterfaces";
import { Dispatch } from "redux";
import { bookActionTypes } from "../../redux/types/book/bookType";

interface iGlobalProviderProps {
  children: ReactChild;
}
export const GlobalProvider: FC<iGlobalProviderProps> = ({
  children,
}: iGlobalProviderProps) => {
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(false);

  const globalDispatch = async (
    effect: (dispatch: Dispatch<bookActionTypes>) => Promise<iApiResponse>,
    showLoader = true
  ): Promise<iApiResponse> => {
    setShowLoader(showLoader);
    const data = (await dispatch(effect)) as unknown as iApiResponse;
    setShowLoader(false);
    return data;
  };

  return (
    <GlobalContext.Provider value={{ showLoader, globalDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
