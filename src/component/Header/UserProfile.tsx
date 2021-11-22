import React, {FC, useEffect, useRef, useState} from 'react';
import { NavLink } from 'react-router-dom';
export const UserProfile: FC = () => {
    // Start Open function for Userprofile
    const [userprofileToggled, setUserprofileToggled] = useState(false);
    const OpenProfile = () => {
        userprofileToggled ? setUserprofileToggled(false) : setUserprofileToggled(true);
    }
    const ref = useRef<HTMLDivElement>(null);
    const handleClickOutside = (event: { target: any; }) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setUserprofileToggled(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });
    // End Open function for Userprofile
    // User Image
    let UserImage = "/images/user-image.jpg";
    return (
        <div className={`user-profile ${userprofileToggled ? "active" : ""}`} ref={ref}>
            <a href="javascript:void(0)" onClick={OpenProfile}>
                <img src={UserImage} alt="User Image" />
                <span>Rebel Tech</span>
                <svg className="arrow-down" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none"><path d="M895 3506 c-67 -29 -105 -105 -90 -183 6 -34 100 -131 843 -875 744 -743 841 -837 875 -843 94 -18 39 -66 949 843 909 909 861 855 843 949 -9 49 -69 109 -118 118 -94 18 -46 59 -875 -768 l-762 -762 -758 757 c-424 424 -769 762 -785 768 -38 14 -85 12 -122 -4z"/></g></svg>
            </a>
            <section className="nav-dropdown">
                <NavLink to="#">Dashboard</NavLink>
                <NavLink to="#">Setting</NavLink>
                <NavLink to="#">Logout</NavLink>
            </section>
        </div>
    );
}