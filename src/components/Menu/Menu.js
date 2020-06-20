import React, { Component } from 'react';
import './Menu.css';

import contact from '../../img/contact.svg';
import search from '../../img/search.svg';
import login from '../../img/login.svg';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }
    activeMenu = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }))
    }
    render() {
        const isActive = this.state.isActive ? 'active' : '';

        return (
            <div className={"menu-container " + isActive} >
                <div className="menu-nav-container">
                    <form className="menu-search">
                        <input placeholder="szukana fraza" />
                        <button type="submit"><img src={search} width="18" /></button>
                    </form>
                    <nav>
                        <a href='#' className="menu-nav-item">Hipotrofia</a>
                        <a href='#' className="menu-nav-item">Pomoc</a>
                        <a href='#' className="menu-nav-item">Historie dzieci</a>
                        <a href='#' className="menu-nav-item">Współpraca</a>
                        <a href='#' className="menu-nav-item">
                            <img src={contact} width="20" className="menu-nav-img mobile-only" />
                            Kontakt</a>
                    </nav>
                    <a href='#' className="menu-nav-item"><img src={login} width="16" className="menu-nav-img" /><span className="mobile-only">Załoguj się</span></a>
                </div>
                <a href='#' className="menu-control mobile-only" onClick={this.activeMenu}>
                    <span></span>
                </a>
            </div>
        )
    }
}

export default Menu;;

//author: Paweł Uszakow