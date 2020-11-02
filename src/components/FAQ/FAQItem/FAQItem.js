import React, { useState, useEffect, useRef } from 'react';
import './FAQItem.scss';

function FAQItem({ item }) {
    const [isMinimized, setIsMinimized] = useState(true);

    const button = useRef(null);
    const content = useRef(null);

    useEffect(() => {
        if (isMinimized === true) {
            button.current.classList.remove('faq-button-up');
            content.current.classList.remove('faq-content-show');
        } else {
            button.current.classList.add('faq-button-up');
            content.current.classList.add('faq-content-show');
        }
    }, [isMinimized])

    const changeDisplayContent = () => {
        setIsMinimized(!isMinimized);
    }

    return (
        <div className="faq-item">
            <h2 className="faq-item-title" onClick={changeDisplayContent}>
                {item.question}
                <div className="faq-item-buttonwrap">
                    <div className="faq-item-button" ref={button} />
                </div>
            </h2>
            <p className="faq-item-content" ref={content}>{item.answer}</p>
        </div>
    )
}

export default FAQItem;