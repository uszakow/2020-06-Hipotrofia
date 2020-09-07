import React from 'react';
import './PageInConstruction.scss';

import Banner from '../Banner/Banner';
import bannerPhoto from '../../img/Banner/banner.svg';
import builder from '../../img/PageInConstruction/builder.svg';

function PageInConstruction() {
    return (
        <>
            <Banner photo={bannerPhoto} />
            <div className="container">
                <h1>
                    Strona w budowie!
               </h1>
                <img src={builder} alt="builder" width='100%'className="pageinconstruction-img"/>
            </div>
        </>
    )
}

export default PageInConstruction;

//author: Paweł Uszakow