import React, {FC} from 'react';
import './header.scss';
import './HeaderResponsive.scss';
import {Logo} from "./Logo";
import {UserProfile} from "./UserProfile";
import {Navigation} from "./Navigation";
export const Header: FC = () => {
    return (
        <header id="header" className="w-100 main-bg dark">
            <div className="container">
                <div className="header-content-wrap">
                    {/*End Component*/}
                    <Logo/>
                    {/*End Logo Component*/}
                    {/*Start Header Navigation*/}
                    <Navigation/>
                    {/*End Header Navigation*/}
                    {/*Start UserProfile Component*/}
                    <UserProfile/>
                    {/*End UserProfile Component*/}
                </div>
            </div>
        </header>
    );
}