import React, { Component } from 'react';
import './Footer.scss';
import axios from "axios";

import FooterItem from './FooterItem/FooterItem';
import FooterInfo from './FooterInfo/FooterInfo';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexForInfo: null,
            authors: []
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

    componentDidMount() {
        axios.get("http://localhost:3001/authors")
            .then(res => {
                const authors = res.data;
                this.setState({ authors });
            })
    }

    render() {
        const { indexForInfo, authors } = this.state;

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