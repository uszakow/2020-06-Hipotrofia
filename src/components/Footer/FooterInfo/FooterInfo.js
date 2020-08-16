import React from 'react';
import './FooterInfo.scss';

function FooterInfo(props) {
    const { author, closeFooterInfo } = props;

    if (author) {
        return (
            <div className="footer-info">
                <div>
                    <img src={author.photo} alt={author.name} />
                    <div>
                        <div className="footer-info-name">{author.name}</div>
                        <div>{author.role}</div>
                        <div>GitHub: <a href={author.github} target="_blank">{author.github}</a></div>
                        <div>LinkedIn: <a href={author.linkedin} target="_blank">{author.linkedin}</a></div>
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