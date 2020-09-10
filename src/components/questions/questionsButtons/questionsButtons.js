import React from 'react';
import "./questionsButtons.scss";

function QuestionsButtons(props) {
    const { question, answer } = props.item;
    const showHide = () => {
        alert('dziala');
    }
    return (
        <div>
        <button className='questionsButtons_button' onClick={showHide}>{question}</button>
        <div>{answer}</div>
        </div>
    )
}

export default QuestionsButtons;