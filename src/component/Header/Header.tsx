import React, {FC} from 'react';
import './Header.scss';
import './HeaderResponsive.scss';
import {Logo} from "../Logo/Logo";
import {UserProfile} from "../UserProfile/UserProfile";
import { NavLink } from 'react-router-dom';

export const Header: FC = () => {
    return (
        <>
            <div id="main-header" className="main-header w-100 main-bg">
                <div className="container">
                    <div className="header-content-wrap">
                        <Logo/>
                        <div className="header-navigation">
                            <span className="menu-btn"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"> <path d="M125 4393 c-164 -86 -166 -300 -3 -384 36 -19 95 -19 2435 -19 2313 0 2399 1 2438 19 164 76 166 298 3 382 -36 19 -95 19 -2440 19 -2169 -1 -2406 -2 -2433 -17z"/><path d="M149 2766 c-60 -21 -100 -56 -125 -110 -52 -112 -10 -231 100 -282 l51 -24 2385 0 2385 0 51 24 c113 52 154 174 96 287 -29 57 -70 92 -131 109 -24 6 -848 10 -2406 10 -1911 -1 -2377 -3 -2406 -14z"/> <path d="M125 1121 c-104 -47 -153 -174 -106 -276 19 -43 78 -100 118 -116 33 -12 4813 -12 4846 0 40 16 99 73 118 116 47 102 -2 229 -106 276 -38 18 -140 19 -2435 19 -2295 0 -2397 -1 -2435 -19z"/></g></svg></span>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="#">About</NavLink></li>
                                <li>
                                    <NavLink to="#"> Services </NavLink>
                                    <svg className="drop-down-arrow" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"><path d="M895 3506 c-67 -29 -105 -105 -90 -183 6 -34 100 -131 843 -875 744 -743 841 -837 875 -843 94 -18 39 -66 949 843 909 909 861 855 843 949 -9 49 -69 109 -118 118 -94 18 -46 59 -875 -768 l-762 -762 -758 757 c-424 424 -769 762 -785 768 -38 14 -85 12 -122 -4z"/></g></svg>
                                    <div className="dropdownList">
                                        <ul>
                                            <li><NavLink to="#">Service One</NavLink></li>
                                            <li><NavLink to="#">Service Two</NavLink></li>
                                            <li><NavLink to="#">Service Three</NavLink></li>
                                            <li><NavLink to="#">Service Four</NavLink></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><NavLink to="#">Blogs</NavLink></li>
                                <li><NavLink to="#">Contact</NavLink></li>
                            </ul>
                        </div>
                        <UserProfile/>
                    </div>
                </div>
            </div>
        </>
    );
}
