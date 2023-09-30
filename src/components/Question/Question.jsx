import {useState} from "react";

import './Question.css';

export const Question = (props) => {
    const {currentQuestion, setCurrentQuestion, questions} = props;
    const [valueRadioBtn, setChecked] = useState(0);
    const [arrayAnswers, setArrayAnswers] = useState([]);
    const answer = {}

    const getPrevQuestion = () => {
        if (currentQuestion > 1) {
            setCurrentQuestion(currentQuestion - 1);
            setChecked(arrayAnswers[currentQuestion - 1]['choiceAnswer']);
        }
    }

    const getNextQuestion = () => {
        if (currentQuestion <= questions.length + 1 && valueRadioBtn) {
            answer.id = currentQuestion;
            answer.value = valueRadioBtn;
            setArrayAnswers((prevState) => ({
                ...prevState,
                [currentQuestion]: {
                    ...prevState[currentQuestion],
                    'choiceAnswer': valueRadioBtn
                }
            }));

            setCurrentQuestion(currentQuestion + 1);
            if (arrayAnswers[currentQuestion + 1]) {
                setChecked(arrayAnswers[currentQuestion + 1]['choiceAnswer']);
            } else {
                setChecked(0);
            }
        }
    }

    const toggleRadioBtn = (event) => {
        setChecked(event.target.value);
    }

    return (
        <form className="question">
            <h2 className="question__title">{questions[currentQuestion - 1].title}</h2>
            <ul className="question__list">
                {
                    questions[currentQuestion - 1].answers.map(answer => (
                        <li key={answer.id} className="question__list__item">
                            <label htmlFor={answer.id}>
                                <input id={answer.id} value={answer.id} checked={valueRadioBtn === answer.id.toString()}
                                       onChange={(event) => {
                                           toggleRadioBtn(event)
                                       }} type="radio" name="age"/>{answer.text}
                            </label>
                        </li>
                    ))
                }
            </ul>
            {currentQuestion > 1 ?
                <button className="btn btn-white prev-question-btn" type="button"
                        onClick={getPrevQuestion}>Назад</button> : ''
            }
            <button className="btn btn-blue next-question-btn"
                    type={currentQuestion === 4 ? "submit" : "button"}
                    onClick={getNextQuestion}
            >{currentQuestion === 3 ? "Узнать результаты" : "Дальше"}</button>
        </form>
    )
}