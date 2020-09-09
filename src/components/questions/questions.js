import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../Banner/Banner";
import ButtonsAndText from '../ButtonsAndText/ButtonsAndText';
import bannerPhoto from "../../img/Banner/banner.svg";

const QuestionsPage = () => (
    <>
    <Banner photo={bannerPhoto}/>
    <div className='questions container'>
    <ButtonsAndText />

    <div>
        hhhejjjjjjjj
    </div>
    <div className="questions container_photo"></div>
    </div>
    </>
)

export default QuestionsPage;