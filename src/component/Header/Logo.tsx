import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
export const Logo: FC = () => {
    let logo = "/images/logo.png";
    return (
        <NavLink className="header-logo" to="/"><img src={logo} alt="logo" /></NavLink>
    );
}