import './Counter.css';

export const Counter = (props) => {
    const {currentQuestion, questions} = props;
    return (
        <div className="counter">
            <div className="counter__pagination">
                {
                    questions.map(question => (
                        <div key={question.id}
                             className={question.id === currentQuestion ? "counter__pagination-bullet active" : "counter__pagination-bullet"}></div>
                    ))
                }
            </div>
            <p className="counter__text">Вопрос {currentQuestion} из {questions.length}</p>
        </div>
    )
}