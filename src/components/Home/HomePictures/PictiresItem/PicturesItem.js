import React from 'react';
import './PicturesItem.scss';

import { Link } from 'react-router-dom';

function PicturesItem(props) {
    const { href, src, alt, title, text } = props.item;

    return (
        <Link exact to={href} className="home-pictures-item">
            <img src={src} alt={alt} />
            <h4>{title}</h4>
            <p>{text}</p>
        </Link>
    )
}

export default PicturesItem;

//author: Paweł Uszakow