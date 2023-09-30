import {useState} from "react";

import './QuestionsArea.css';

import {questions} from '../../store/questions';
import {Counter} from "../Counter";
import {Question} from "../Question";

export const QuestionsArea = () => {
    const [currentQuestion,setCurrentQuestion] = useState(1)

    return (
       <div className="questions-area">
           {currentQuestion <= questions.length ?
            <div className="questions-area-wrapper">
                <Counter currentQuestion={currentQuestion} questions={questions}/>
                <Question currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}
                          questions={questions}/>
            </div> : '' }
       </div>
    )
}