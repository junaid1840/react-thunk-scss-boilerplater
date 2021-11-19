import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
export const Logo: FC = () => {
    let logo = "/images/logo.png";
    return (
        <div className="header-logo">
            <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
        </div>
    );
}