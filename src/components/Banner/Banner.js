import React from 'react';
import './Banner.css';

function Banner(props) {
    return (
        <div className="banner-container">
            <img src={props.photo} alt="background" width='100%' className="banner-background" />
            <div className="banner-button-container">
                <a href="#" className="banner-button banner-button-pregnancy">Hipotrofia w ciąży</a>
                <a href="#" className="banner-button banner-button-baby">Hipotrofia u dzieci</a>
            </div>
        </div>
    )
}

export default Banner;

//author: Paweł Uszakow