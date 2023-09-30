import {useState} from "react";

import './QuestionsArea.css';

import {questions} from '../../store/questions';
import {Counter} from "../Counter";
import {Question} from "../Question";
import {Products} from "../Products";
import {Header} from "../Header";

export const QuestionsArea = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const totalQuestions = questions.length;

    return (
        <div className="container">
            <Header currentQuestion={currentQuestion} totalQuestions={totalQuestions}/>
            <div className="questions-area">
                {currentQuestion <= questions.length ?
                    <div className="questions-area-wrapper">
                        <Counter currentQuestion={currentQuestion} questions={questions}/>
                        <Question currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}
                                  questions={questions}/>
                    </div> : ''}
                {currentQuestion > questions.length ?
                    <Products/> : ''
                }
            </div>
        </div>
    )
}