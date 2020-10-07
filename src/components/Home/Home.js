import React from 'react';

import Banner from '../Banner/Banner';
import Pictures from './HomePictures/Pictures';
import Text from './HomeText/Text';

import bannerPhoto from '../../img/Banner/background.png';

function Home() {    
    return (
        <>
            <Banner photo={bannerPhoto} />
            <div className="container">
                <Pictures />
                <Text />
            </div>
        </>
    )
}

export default Home;

//author: Paweł Uszakow

