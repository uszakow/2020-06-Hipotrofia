import React from 'react';

import MenuItem from '../MenuItem/MenuItem';

import login from '../../../img/Menu/login.svg';

function Login(props) {
    const { css, closeMenu } = props;
    const cssItem = (css === 'menu-login-mobile' ? 'menu-item-mobile' : 'menu-item-desctop');

    return (
        <MenuItem href="/login" cssItem={cssItem} closeMenu={closeMenu}>
            <span>
                <img src={login} className="menu-nav-img" width="16" title="Zaloguj się" alt="Zaloguj się" />
                <span className="mobile-only">Zaloguj się</span>
            </span>
        </MenuItem>
    )
}

export default Login;

//author: Paweł Uszakow