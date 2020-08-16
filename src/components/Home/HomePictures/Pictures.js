import React from 'react';
import './Pictures.scss';

import PicturesItem from './PictiresItem/PicturesItem';

import wspolpraca from '../../../img/Home/HomePictures/wspolpraca.png';
import roznicaMiedzySGAaIUGR from '../../../img/Home/HomePictures/roznicaMiedzySGAaIUGR.png';
import programLeczeniaWPolsce from '../../../img/Home/HomePictures/programLeczeniaWPolsce.png';
import historieDzieci from '../../../img/Home/HomePictures/historieDzieci.png';
import najczesciejZadawanePytania from '../../../img/Home/HomePictures/najczesciejZadawanePytania.png';
import magicFoundation from '../../../img/Home/HomePictures/magicFoundation.png';

const tiles = [
    {
        href: '/cooperation',
        src: wspolpraca,
        alt: 'Współpraca',
        title: 'Współpraca',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        href: '/inconstruction',
        src: roznicaMiedzySGAaIUGR,
        alt: 'Różnica między SGA a IUGR',
        title: 'Różnica między SGA a IUGR',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        href: '/inconstruction',
        src: programLeczeniaWPolsce,
        alt: 'Programy leczenia hormonem wzrostu w Polsce',
        title: 'Programy leczenia hormonem wzrostu w Polsce',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        href: '/stories',
        src: historieDzieci,
        alt: 'Historie dzieci',
        title: 'Historie dzieci',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        href: '/inconstruction',
        src: najczesciejZadawanePytania,
        alt: 'Najczęściej zadawane pytania o hipotrofię',
        title: 'Najczęściej zadawane pytania o hipotrofię',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        href: '/inconstruction',
        src: magicFoundation,
        alt: 'Magic foundation',
        title: 'Magic foundation',
        text: 'https://www.magicfoundation.org/'
    },
]

function Pictures() {
    return (
        <div className="home-pictures-container">
            {tiles.map((item, index) => (
                <PicturesItem key={index} item={item} />
            ))}
        </div>
    )
}

export default Pictures;

//author: Paweł Uszakow