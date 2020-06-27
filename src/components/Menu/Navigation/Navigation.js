import React from 'react';
import './Navigation.css';

import MenuItem from '../MenuItem/MenuItem';

import contact from '../../../img/Menu/contact.svg';

function Navigation(props) {
    const { css, closeMenu } = props;
    const cssItem = (css === 'menu-navigation-mobile' ? 'menu-item-mobile' : 'menu-item-desctop');

    return (
        <nav className={"menu-navigation"}>
            <MenuItem href="/" cssItem={cssItem} closeMenu={closeMenu}>Hipotrofia</MenuItem>
            <MenuItem href="/help" cssItem={cssItem} closeMenu={closeMenu}>Pomoc</MenuItem>
            <MenuItem href="/stories" cssItem={cssItem} closeMenu={closeMenu}>Historie dzieci</MenuItem>
            <MenuItem href="/blog" cssItem={cssItem} closeMenu={closeMenu}>Artykuły</MenuItem>
            <MenuItem href="/cooperation" cssItem={cssItem} closeMenu={closeMenu}>
                <span>
                    <img src={contact} width="20" className="mobile-only" alt="contact" />
                    Kontakt
                </span>
            </MenuItem>
        </nav>
    )
}

export default Navigation;

//author: Paweł Uszakow