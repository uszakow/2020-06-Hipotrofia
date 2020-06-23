import React from 'react';
import './FooterItem.css';

function FooterItem(props) {
    const { name, role, link } = props.author;
    console.log(name)
    return (
        <span className="footer-item">
            <a href={link}>{name}</a>
            <span> - {role}</span>
        </span>
    )
}

export default FooterItem;

//author: Paweł Uszakow