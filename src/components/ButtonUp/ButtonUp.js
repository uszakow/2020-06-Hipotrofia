import React, { Component } from 'react';
import './ButtonUp.scss';

import up from '../../img/ButtonUp/up.svg';

class ButtonUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: true
        }
    }

    isTop = () => {
        if (window.pageYOffset > 200) {
            this.setState({
                top: false
            })
        } else {
            this.setState({
                top: true
            })
        }
    }
    scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    componentDidMount() {
        this.isTop();
        window.addEventListener("scroll", this.isTop);
    }

    render() {
        const { top } = this.state;
        const css = (top === false ? 'button-up-show' : '');

        return (
            <button className={"button-up " + css} onClick={this.scrollUp}>
                <img src={up} alt="Up" />
            </button>
        )
    }
}

export default ButtonUp;

//author: Paweł Uszakow