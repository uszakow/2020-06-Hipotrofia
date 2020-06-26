import React from 'react';
import './Pictures.css';

import PicturesItem from './PictiresItem/PicturesItem';

import picture from '../../../img/Home/HomePictures/picture.svg';

const tiles = [
    {
        href: '#',
        src: picture,
        alt: 'image',
        title: 'Współpraca',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        href: '#',
        src: picture,
        alt: 'image',
        title: 'Różnica między SGA a IUGR',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        href: '#',
        src: picture,
        alt: 'image',
        title: 'Programy leczenia hormonem wzrostu w Polsce',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        href: '#',
        src: picture,
        alt: 'image',
        title: 'Historie dzieci',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        href: '#',
        src: picture,
        alt: 'image',
        title: 'Najczęściej zadawane pytania o hipotrofię',
        text: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
        href: '#',
        src: picture,
        alt: 'image',
        title: 'Magik foundation',
        text: 'https://www.magicfoundation.org/'
    },
]

function Pictures() {
    return (
        <div className="pictures-container">
            {tiles.map((item, index) => (
                <PicturesItem key={index} item={item} />
            ))}
        </div>
    )
}

export default Pictures;

//author: Paweł Uszakow