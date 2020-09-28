import React from 'react';
import './Navigation.scss';

import MenuItem from '../MenuItem/MenuItem';

function Navigation(props) {
    const { css, closeMenu } = props;
    const cssItem = (css === 'menu-navigation-mobile' ? 'menu-item-mobile' : 'menu-item-desctop');

    return (
        <nav className={"menu-navigation"}>
            <MenuItem href="/" cssItem={cssItem} closeMenu={closeMenu}>Hipotrofia</MenuItem>
            <MenuItem href="/help" cssItem={cssItem} closeMenu={closeMenu}>Pomoc</MenuItem>
            <MenuItem href="/stories" cssItem={cssItem} closeMenu={closeMenu}>Historie dzieci</MenuItem>           
            <MenuItem href="/cooperation" cssItem={cssItem} closeMenu={closeMenu}>Współpraca</MenuItem>
        </nav>
    )
}

export default Navigation;

//author: Paweł Uszakow