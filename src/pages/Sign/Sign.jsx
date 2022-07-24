import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../../img/header/logo.png"
import SignIn from './SignIn';
import SignUp from './SignUp';

const Sign = (props) => {
    const sign = useLocation();
    console.log(sign)
    return (
        <div className='sign'>
            <div className="sign__cover">
                <div className="sign__logo">
                    <NavLink to="/">
                    <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                {sign.pathname === '/signin' ? <SignIn/> : <SignUp/>}
            </div>
            
        </div>
    );
};

export default Sign;