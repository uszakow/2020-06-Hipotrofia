import React, { Component } from 'react';
import './MenuMobile.css';

import Navigation from '../Navigation/Navigation';
import Searcher from '../Searcher/Searcher';
import Login from '../Login/Login';

class MenuMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    activeMenu = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }))
    }

    render() {        
        const isActive = this.state.isActive ? 'active' : '';

        return (
            <div className={"menu-mobile " + isActive}>
                <button className={"menu-control"} onClick={this.activeMenu}>
                    <span />
                </button>
                <div className="menu-mobile-container">
                    <Searcher css="menu-searcher-mobile" closeMenu={this.activeMenu} />
                    <Navigation css="menu-navigation-mobile" closeMenu={this.activeMenu} />
                    <Login css="menu-login-mobile" closeMenu={this.activeMenu} />
                </div>
            </div >
        )
    }
}

export default MenuMobile;

//author: Paweł Uszakow