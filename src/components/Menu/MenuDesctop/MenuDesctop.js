import React from 'react';
import './MenuDesctop.scss';

import Navigation from '../Navigation/Navigation';
import Searcher from '../Searcher/Searcher';
import Login from '../Login/Login';

function MenuDesctop() {
    return (
        <div className="menu-desctop">            
            <Navigation css="menu-navigation-desctop" />
            <Searcher css="menu-searcher-desctop" />
            <Login css="menu-login-desctop" />
        </div>
    )
}

export default MenuDesctop;

//author: Paweł Uszakow