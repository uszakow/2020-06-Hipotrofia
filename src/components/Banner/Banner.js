import React, { useState, useEffect } from 'react';
import './Banner.scss';

import { Link } from 'react-router-dom';

import logo from './../../img/Banner/logo-hipotrofia.png';
// import axios from 'axios';

//ma zaciągać z http://localhost:3001/pictures/banner/logo

function Banner(props) {
    // const [appState, setAppState] = useState({
    //     logo: ''
    // });

    // useEffect(() => {
    //     axios.get("http://localhost:3001/pictures")
    //         .then(res => {
    //             setAppState({
    //                 logoHipotrofia: require(`./../../img/${res.data.banner}`)
    //             });
    //         })
    // }, [setAppState])

    return (
        <div className="banner-container">
            <img src={props.photo} alt="" width='100%' className="banner-background" />
            <div className="container">
                <img src={logo} alt="logo" className="banner-logo" />
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