import './Header.css';

export const Header = (props) => {
    const {currentQuestion, totalQuestions} = props;
    const title = currentQuestion > totalQuestions ? "Результат" : "Онлайн-подбор средств для лица";
    const subtitle = currentQuestion > totalQuestions ? "Мы подобрали для вас наиболее подходящие средства" : "Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов";
    return (
        <div className="header">
            <h1 className="header__title">{title}</h1>
            <p className="header__subtitle">{subtitle}</p>
        </div>
    )
}