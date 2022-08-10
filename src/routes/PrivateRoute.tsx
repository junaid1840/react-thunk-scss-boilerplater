import React, { FC } from "react";

interface iProps {
  Component: FC;
}
export const PrivateRoute: FC<iProps> = ({ Component }: iProps) => {
  return (
    <div>
      {
        // Auth logic here
        // true ? Component : <Navigate to="/" />
        Component
      }
    </div>
  );
};
