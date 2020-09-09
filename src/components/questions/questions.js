import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../Banner/Banner";
import ButtonsAndText from '../ButtonsAndText/ButtonsAndText';
import bannerPhoto from "../../img/Banner/banner.svg";
import "./questions.scss";
import QuestionsButtons from "./questionsButtons/questionsButtons";

const QuestionsPage = () => {
    return (
    <>
    <Banner photo={bannerPhoto}/>
    <div className='questions container'>
    <ButtonsAndText />
    <QuestionsButtons />
    <div className="questions_container_photo"></div>
    </div>
    </>
)}

export default QuestionsPage;