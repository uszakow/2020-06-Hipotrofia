import React from 'react';
import './FooterInfo.scss';

function FooterInfo(props) {
    const { author, closeFooterInfo } = props;

    if (author) {
        const photo = require(`./../../../img${author.photo}`)
        
        return (
            <div className="footer-info">
                <div>
                    <img src={photo} alt={author.name} />
                    <div>
                        <div className="footer-info-name">{author.name}</div>
                        <div>{author.role}</div>
                        {author.contacts.map((item, index) => (
                            <div key={index}>
                                <span>{Object.keys(item)[0]}: </span>
                                <a href={Object.values(item)[0]}>{Object.values(item)[0]}</a>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="footer-info-close"
                    title="wróć"
                    onClick={closeFooterInfo}>
                    <span />
                </button>
            </div>
        )
    } else {
        return null;
    }
}

export default FooterInfo;

//author: Paweł Uszakow