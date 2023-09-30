import './App.css';
import {Header} from "./components/Header";
import {QuestionsArea} from "./components/QuestionsArea";

function App() {
    return (
        <div className="container">
            <Header/>
            <QuestionsArea/>
        </div>
    );
}

export default App;
