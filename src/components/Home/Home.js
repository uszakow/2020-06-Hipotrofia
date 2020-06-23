import React from 'react';
import './Home.css';

import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import Pictures from './HomePictures/Pictures';
import Text from './HomeText/Text';

import bannerPhoto from '../../img/Banner/banner.svg';

function Home() {
    return (
        <>
            <Menu />
            <Banner photo={bannerPhoto}/>
            <Pictures />
            <Text />
        </>
    )
}

export default Home;

//author: Paweł Uszakow