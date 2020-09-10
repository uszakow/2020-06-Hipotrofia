import React from 'react';
import "./questionsButtons.scss";

function QuestionsButtons(props) {
    const { question, answer } = props.item;
    const showHide = () => {
        document.getElementById(question).classList.toggle('hide');
    }
    return (
        <div>
        <button className='questionsButtons_button' onClick={showHide}>{question}</button>
        <div id={question} className='hide'>{answer}</div>
        </div>
    )
}

export default QuestionsButtons;