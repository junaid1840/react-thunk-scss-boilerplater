import React, { FC, useContext } from "react";
import { getCategoryDropDownEffect } from "../../redux/effects/effects-for-services/Effect-service";
import { GlobalContext } from "../../services/context/GlobalContext";

export const Home: FC = () => {
  const { showLoader, setShowLoader, globalDispatch } =
    useContext(GlobalContext);
  const getCategory = async () => {
    setShowLoader(true);
    await globalDispatch(getCategoryDropDownEffect());
  };

  return (
    <>
      <h1>Home</h1>
      {showLoader && <h1>Hello</h1>}
      <button onClick={() => getCategory()}>Go Error</button>
    </>
  );
};
