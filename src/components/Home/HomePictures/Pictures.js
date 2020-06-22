import React from 'react';
import './Pictures.css';

import picture from '../../../img/picture.svg';

function Pictures() {
    return (
        <div className="pictures-container">
            <a href="#" className="pictures-item">
                <img src={picture} />
                <h4>Współpraca</h4>
                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </a>
            <a href="#" className="pictures-item">
                <img src={picture} />
                <h4>Różnica między SGA a IUGR</h4>
                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </a>
            <a href="#" className="pictures-item">
                <img src={picture} />
                <h4>Programy leczenia hormonem wzrostu w Polsce</h4>
                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </a>
            <a href="#" className="pictures-item">
                <img src={picture} />
                <h4>Historie dzieci</h4>
                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </a>
            <a href="#" className="pictures-item">
                <img src={picture} />
                <h4>Najczęściej zadawane pytania o hipotrofię</h4>
                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            </a>
            <a href="#" className="pictures-item">
                <img src={picture} />
                <h4>Magik foundation</h4>
                <p>https://www.magicfoundation.org/</p>
            </a>
        </div>
    )
}

export default Pictures;

//author: Paweł Uszakow