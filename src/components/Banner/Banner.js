import React from 'react';
import './Banner.scss';

import { Link } from 'react-router-dom';

function Banner(props) {
    return (
        <div className="banner-container">
            <img src={props.photo} alt="background" width='100%' className="banner-background" />
            <div className="banner-button-container">
                <Link to="/pregnancy" className="banner-button banner-button-pregnancy">Hipotrofia w ciąży</Link>
                <Link to="/children" className="banner-button banner-button-baby">Hipotrofia u dzieci</Link>
            </div>
        </div>
    )
}

export default Banner;

//author: Paweł Uszakow