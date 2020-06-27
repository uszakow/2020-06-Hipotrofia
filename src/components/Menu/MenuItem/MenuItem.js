import React from 'react';
import './MenuItem.css';

import { NavLink } from 'react-router-dom';

function MenuItem(props) {
    const { href, cssItem, closeMenu, children } = props;

    const close = () => {
        if (closeMenu) closeMenu();
    }

    return (
        <NavLink exact to={href} activeClassName="menu-item-active" className={"menu-item " + cssItem} onClick={close}>{children}</NavLink>
    )
}

export default MenuItem;

//author: Paweł Uszakow