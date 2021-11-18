import React, { FC, useContext } from "react";
import {
  failureEffect,
  successEffect,
} from "../../redux/effects/effects-for-services/Effect-service";
import { GlobalContext } from "../../services/context/GlobalContext";

export const Home: FC = () => {
  const { showLoader, globalDispatch } = useContext(GlobalContext);

  const successCall = async () => {
    const data = await globalDispatch(successEffect);
    alert(data.response);
  };

  const failureCall = async () => {
    const data = await globalDispatch(failureEffect);
    alert(data.error);
  };

  return (
    <>
      <h1>Home</h1>
      {showLoader && <h1>Show Loader</h1>}
      <button onClick={successCall}>Go Success</button>
      <button onClick={failureCall}>Go Error</button>
    </>
  );
};
