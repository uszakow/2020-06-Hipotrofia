import React, { useState, useEffect } from 'react';

import axios from 'axios';

import FAQItem from './FAQItem/FAQItem';
import Banner from './../Banner/Banner';
import bannerPhoto from './../../img/Banner/background.png';

function FAQ() {
    const [faqArr, setFaq] = useState([]);

    useEffect(() => {
        try {
            const getFaqArr = async () => {
                const url = "http://localhost:3001/faq";
                const res = await axios.get(url);

                setFaq(res.data);
            }
            getFaqArr();
        } catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <>
            <Banner photo={bannerPhoto} />
            <div className="container">
                <h1>Frequently Asked Questions</h1>
                {faqArr.map((item, index) => (
                    <FAQItem key={index} item={item} />
                ))}
            </div>
        </>
    )
}

export default FAQ;