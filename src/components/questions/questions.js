import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../Banner/Banner";
import ButtonsAndText from '../ButtonsAndText/ButtonsAndText';
import bannerPhoto from "../../img/Banner/banner.svg";
import QuestionsData from "./questionsData";
import "./questions.scss";

const QuestionsPage = () => {
    console.log(QuestionsData[0])
    return (
    <>
    <Banner photo={bannerPhoto}/>
    <div className='questions container'>
    <ButtonsAndText />

    <div>
        hhhejjjjjjjj
    </div>
    <div className="questions_container_photo"></div>
    </div>
    </>
)}

export default QuestionsPage;