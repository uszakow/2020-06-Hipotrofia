import React from 'react';
import './PicturesItem.scss';

function PicturesItem(props) {
    const { href, src, alt, title, text } = props.item;
    
    return (
        <a href={href} className="home-pictures-item">
            <img src={src} alt={alt} />
            <h4>{title}</h4>
            <p>{text}</p>
        </a>
    )
}

export default PicturesItem;

//author: Paweł Uszakow