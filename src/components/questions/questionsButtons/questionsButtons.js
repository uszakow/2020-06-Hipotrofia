import React from "react";
import "./questionsButtons.scss";
import Vector from "../../../img/questions/Vector.png";

function QuestionsButtons(props) {
  const { question, answer } = props.item;
  const showHide = () => {
    document.getElementById(question).classList.toggle("hide");
    document.getElementById("img" + question).classList.toggle("rotate");
  };
  return (
    <div>
      <button className="questions_questionsButtons_button" onClick={showHide}>
        <span className="questions_questionsButtons_question">{question}</span>
        <span>
          <img src={Vector} className="rotate + questions_questionsButtons_img" id={"img" + question} />
        </span>
      </button>
      <div id={question} className="questions_questionsButtons_answer + hide">
        {answer}
      </div>{" "}
      {/*zmiana nazwy klasy na "questions_questionsButtons_hide" powoduje, że button nie działa, nie wiem dlaczego*/}
    </div>
  );
}

export default QuestionsButtons;
