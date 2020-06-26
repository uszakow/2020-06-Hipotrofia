import React from 'react';
import './PicturesItem.css';

function PicturesItem(props) {
    const { href, src, alt, title, text } = props.item;
    return (
        <a href={href} className="pictures-item">
            <img src={src} alt={alt} />
            <h4>{title}</h4>
            <p>{text}</p>
        </a>
    )
}

export default PicturesItem;

//author: Paweł Uszakow