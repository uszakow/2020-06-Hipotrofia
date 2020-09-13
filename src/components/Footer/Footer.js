import React, { Component } from 'react';
import './Footer.scss';

import FooterItem from './FooterItem/FooterItem';
import FooterInfo from './FooterInfo/FooterInfo';

import authors from './authors';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexForInfo: null
        }
    }

    openFooterInfo = (index) => {
        this.setState({
            indexForInfo: index
        })
    }
    closeFooterInfo = () => {
        this.setState({
            indexForInfo: null
        })
    }

    render() {
        const { indexForInfo } = this.state;

        return (
            <footer className="footer-container" >

                <div className="footer-content">
                    {authors.map((item, index) => (
                        <FooterItem key={index} author={item} index={index} openFooterInfo={this.openFooterInfo} />
                    ))}
                    <FooterInfo author={authors[indexForInfo]} closeFooterInfo={this.closeFooterInfo} />
                </div>

            </footer >
        )
    }
}

export default Footer;

//author: Paweł Uszakow