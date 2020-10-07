import React, { useState, useEffect, useCallback } from 'react';
import './Banner.scss';

import { Link } from 'react-router-dom';

// import logo from './../../img/Banner/logo-hipotrofia.png';
import axios from 'axios';

//ma zaciągać z http://localhost:3001/pictures/banner/logo

function Banner(props) {
    const [appState, setAppState] = useState({});

    useEffect(() => {
        axios.get("http://localhost:3001/pictures?id=banner")
            .then(res => {
                // console.log(res.data[0].pictures.logo)
                setAppState({
                    // logo: `./../../img/${res.data}`     
                    logo: res.data[0].pictures.logo
                });
            })
    }, [setAppState])

    if (appState.logo) {
        return (
            <div className="banner-container">
                <img src={props.photo} alt="" width='100%' className="banner-background" />
                <div className="container">
                    <img src={require(`./../../img${appState.logo}`)} alt="logo" className="banner-logo" />
                    <div className="banner-button-container">
                        <Link to="/pregnancy" className="banner-button banner-button-pregnancy">Hipotrofia w ciąży</Link>
                        <Link to="/children" className="banner-button banner-button-baby">Hipotrofia u dzieci</Link>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Banner;

//author: Paweł Uszakow