import React from "react";
import Banner from "../Banner/Banner";
import ButtonsAndText from "../ButtonsAndText/ButtonsAndText";
import bannerPhoto from "../../img/Banner/banner.svg";
import "./questions.scss";
import QuestionsData from "./QuestionsData/questionsData";

const Questions = () => {
  return (
    <>
      <Banner photo={bannerPhoto} />
      <div className="container">
        <ButtonsAndText />
        <QuestionsData />
        <div className="questions_container_photo"></div>
      </div>
    </>
  );
};

export default Questions;

// Marysia Macios