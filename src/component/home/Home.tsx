import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoryDropDownEffect } from "../../redux/effects/effects-for-services/Effect-service";

export const Home: FC = () => {
  const dispatch = useDispatch();
  const getCategory = () => dispatch(getCategoryDropDownEffect());

  return (
    <>
      <h1>Home</h1>
      <button onClick={getCategory}>Go Error</button>
    </>
  );
};
