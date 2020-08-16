import React, { Component } from 'react';
import './Footer.scss';

import FooterItem from './FooterItem/FooterItem';
import FooterInfo from './FooterInfo/FooterInfo';

import author from './../../img/Footer/author.png';
import uszakow from './../../img/Footer/uszakow.png';

const authors = [
    {
        name: 'Paweł Uszakow',
        role: 'front-end developer',
        photo: uszakow,
        github: 'https://github.com/uszakow',
        linkedin: 'https://www.linkedin.com/in/p-uszakow/'
    },
    {
        name: '2Długieimię Długienazwisko',
        role: 'funkcja rola',
        photo: author,
        github: '#',
        linkedin: '#'
    },
    {
        name: '3Długieimię Długienazwisko',
        role: 'funkcja',
        photo: author,
        github: '#',
        linkedin: '#'
    },
    {
        name: '4Imię Nazwisko',
        role: 'funkcja',
        photo: author,
        github: '#',
        linkedin: '#'
    },
    {
        name: '5Imię Nazwisko',
        role: 'funkcja',
        photo: author,
        github: '#',
        linkedin: '#'
    },
    {
        name: '6Imię Nazwisko',
        role: 'funkcja',
        photo: author,
        github: '#',
        linkedin: '#'
    },
    {
        name: '7Imię Nazwisko',
        role: 'funkcja w projekcie',
        photo: author,
        github: '#',
        linkedin: '#'
    },
    {
        name: '8Długieimię Długienazwisko',
        role: 'funkcja rola',
        photo: author,
        github: '#',
        linkedin: '#'
    },
    {
        name: '9Długieimię Długienazwisko',
        role: 'funkcja rola',
        photo: author,
        github: '#',
        linkedin: '#'
    },
    {
        name: '10Imię Nazwisko',
        role: 'funkcja w projekcie',
        photo: author,
        github: '#',
        linkedin: '#'
    },
];

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