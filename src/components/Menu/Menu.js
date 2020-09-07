import React, { Component } from 'react';
import './Menu.scss';

import MenuMobile from './MenuMobile/MenuMobile';
import MenuDesctop from './MenuDesctop/MenuDesctop';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: null
        }
    }

    isMobile = () => {
        this.setState({
            isMobile: window.innerWidth < 992
        })
    }
    componentDidMount() {
        this.isMobile();
        window.addEventListener("resize", this.isMobile);
    }

    render() {
        const { isMobile } = this.state;

        return (
            <div className="menu-container">
                {isMobile ? <MenuMobile /> : <MenuDesctop />}
            </div>
        )
    }
}

export default Menu;

//author: Paweł Uszakow