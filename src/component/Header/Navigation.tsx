import React, {FC, useEffect, useRef, useState} from 'react';
import { NavLink } from 'react-router-dom';
export const Navigation: FC = () => {
    // Start click function for menu
    const [menuToggled, setMenuToggled] = useState(false);
    const ToggleMenu = () => { menuToggled ? setMenuToggled(false) : setMenuToggled(true);}
    const ref = useRef<HTMLDivElement>(null);
    const handleClickOutsideHeader = (event: { target: any; }) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setMenuToggled(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClickOutsideHeader, true);
        return () => {
            document.removeEventListener("click", handleClickOutsideHeader, true);
        };
    });
    // End click function for menu
    // Start dropdown function for menu
    const [dropdownToggled, setDropdownToggled] = useState(false);
    const DropdownToggle = () => {dropdownToggled ? setDropdownToggled(false) : setDropdownToggled(true);}
    // End dropdown function for menu
    return (
        <nav id="nav" className={`header-navigation ${menuToggled ? "active" : ""}`} ref={ref}>
            <span className="open-menu-btn" onClick={ToggleMenu}><svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"> <path d="M125 4393 c-164 -86 -166 -300 -3 -384 36 -19 95 -19 2435 -19 2313 0 2399 1 2438 19 164 76 166 298 3 382 -36 19 -95 19 -2440 19 -2169 -1 -2406 -2 -2433 -17z"/><path d="M149 2766 c-60 -21 -100 -56 -125 -110 -52 -112 -10 -231 100 -282 l51 -24 2385 0 2385 0 51 24 c113 52 154 174 96 287 -29 57 -70 92 -131 109 -24 6 -848 10 -2406 10 -1911 -1 -2377 -3 -2406 -14z"/> <path d="M125 1121 c-104 -47 -153 -174 -106 -276 19 -43 78 -100 118 -116 33 -12 4813 -12 4846 0 40 16 99 73 118 116 47 102 -2 229 -106 276 -38 18 -140 19 -2435 19 -2295 0 -2397 -1 -2435 -19z"/></g></svg></span>
            <span className="close-menu-btn" onClick={ToggleMenu}><svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"> <path d="M161 5103 c-88 -31 -161 -136 -161 -233 0 -20 7 -59 16 -86 15 -45 106 -139 1103 -1137 l1086 -1087 -1082 -1083 c-594 -595 -1089 -1097 -1098 -1116 -45 -90 -24 -213 50 -286 69 -70 163 -91 261 -59 45 15 139 106 1136 1103 l1088 1086 1088 -1086 c997 -997 1091 -1088 1136 -1103 98 -32 192 -11 261 59 70 69 91 163 59 261 -15 45 -106 139 -1103 1137 l-1086 1087 1086 1088 c997 997 1088 1091 1103  1136 32 98 11 192 -59 261 -69 70 -163 91 -261 59 -45 -15 -139 -106 -1137 -1103 l-1087 -1086 -1088 1086 c-997 997 -1091 1088 -1136 1103 -61 20 -117 19 -175 -1z"/></g></svg></span>
            <ul className="list-style-none">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="#">About</NavLink></li>
                <li className={dropdownToggled ? "active" : ""}>
                    <NavLink to="#"> Services </NavLink>
                    <svg onClick={DropdownToggle} className="drop-down-arrow" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"><path d="M895 3506 c-67 -29 -105 -105 -90 -183 6 -34 100 -131 843 -875 744 -743 841 -837 875 -843 94 -18 39 -66 949 843 909 909 861 855 843 949 -9 49 -69 109 -118 118 -94 18 -46 59 -875 -768 l-762 -762 -758 757 c-424 424 -769 762 -785 768 -38 14 -85 12 -122 -4z"/></g></svg>
                    <div className="dropdownList">
                        <ul className="list-style-none">
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
        </nav>
    );
}