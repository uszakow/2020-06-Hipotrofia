import React from 'react';
import './Footer.css';

import FooterItem from './FooterItem/FooterItem';

const authors = [
    {
        name: 'Imię Nazwisko',
        role: 'funkcja',
        link: '#'
    },
    {
        name: 'Długieimię Długienazwisko',
        role: 'funkcja rola',
        link: '#'
    },
    {
        name: 'Długieimię Długienazwisko',
        role: 'funkcja',
        link: '#'
    },
    {
        name: 'Imię Nazwisko',
        role: 'funkcja',
        link: '#'
    },
    {
        name: 'Imię Nazwisko',
        role: 'funkcja',
        link: '#'
    },
    {
        name: 'Imię Nazwisko',
        role: 'funkcja',
        link: '#'
    },
    {
        name: 'Imię Nazwisko',
        role: 'funkcja w projekcie',
        link: '#'
    },
    {
        name: 'Długieimię Długienazwisko',
        role: 'funkcja rola',
        link: '#'
    },
    {
        name: 'Długieimię Długienazwisko',
        role: 'funkcja rola',
        link: '#'
    },
    {
        name: 'Imię Nazwisko',
        role: 'funkcja w projekcie',
        link: '#'
    },
];

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {authors.map((item, index) => (
                    <FooterItem key={index} author={item} />
                ))}
            </div>
        </footer >
    )
}

export default Footer;

//author: Paweł Uszakow