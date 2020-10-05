import React from 'react';
import './Banner.scss';

import { Link } from 'react-router-dom';

import logoHipotrofia from './../../img/Banner/logo-hipotrofia.png';

//ma zaciągać z http://localhost:3001/pictures/banner/logo

function Banner(props) {


    return (
        <div className="banner-container">
            <img src={props.photo} alt="" width='100%' className="banner-background" />
            <div className="container">
                <img src={logoHipotrofia} alt="logo" className="banner-logo" />
                <div className="banner-button-container">
                    <Link to="/pregnancy" className="banner-button banner-button-pregnancy">Hipotrofia w ciąży</Link>
                    <Link to="/children" className="banner-button banner-button-baby">Hipotrofia u dzieci</Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;

//author: Paweł Uszakow