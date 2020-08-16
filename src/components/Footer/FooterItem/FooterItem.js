import React from 'react';
import './FooterItem.scss';

function FooterItem(props) {
    const { name, role } = props.author;
    const { openFooterInfo, index } = props;

    return (
        <span className="footer-item">
            <button onClick={() => openFooterInfo(index)}>{name}</button>
            <span> - {role}</span>
        </span>
    )
}

export default FooterItem;

//author: Paweł Uszakow