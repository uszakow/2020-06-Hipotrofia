import React from 'react';
import QuestionsButtons from '../questionsButtons/questionsButtons';


const questionsAnswers = [
  { question: "Question 1", answer: "1 lorem ipsum" },
  { question: "Question 2", answer: "2 lorem ipsum" },
];

function QuestionsData() {
return (
  <div className='questions-questionsData-container'>
    {questionsAnswers.map((item, index)=> (
                <QuestionsButtons key={index} item={item} />
            ))}
  </div>
)
}

export default QuestionsData;