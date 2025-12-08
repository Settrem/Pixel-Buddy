import { useState, useEffect } from "react";
import '../styles/App.css';

function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export function TriviaQuestionView({ question, onAnswer, onNextQuestion, selectedAnswer, currentIndex, totalQuestions }) {
    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    useEffect(() => {
        if (!question) return;

        const allAnswers = [...question.incorrect_answers, question.correct_answer];
        setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
    }, [question]);

    function getButtonColor(answer) {
        if (!selectedAnswer) return "black";

        if (answer === question.correct_answer) {
            return "#37a33dff";
        }
        return "#c02e24ff";
    }

    function handleAnswerClick(answer) {
        if (selectedAnswer) return;
        onAnswer(answer);
    }

    return (
        <div>
            <div className="trivia-text" style={{ marginBottom: "10px" }}>
                Question {currentIndex + 1} of {totalQuestions}
            </div>

            <div className="trivia-center">
                <div className="trivia-grid">
                    {shuffledAnswers.map((answer, index) => (
                        <button
                            key={index}
                            className="trivia-question"
                            style={{ color: getButtonColor(answer) }}
                            onClick={() => handleAnswerClick(answer)}
                            disabled={selectedAnswer !== null}
                        >
                            {decodeHtml(answer)}
                        </button>
                    ))}
                </div>
            </div>
                        <div className="trivia-text">
                {!selectedAnswer ? (
                    <p>{decodeHtml(question.question)}</p>
                ) : (
                    <p style={{ fontWeight: "bold", fontSize: "em" }}>
                        {selectedAnswer === question.correct_answer ? "Correct!" : "Incorrect!"}
                    </p>
                )}
            </div>

            {selectedAnswer && (
                <div className="trivia-center">
                    <button
                        className="trivia-next"
                        onClick={onNextQuestion}
                    >
                        {currentIndex + 1 === totalQuestions ? "See Results" : "Next Question →"}
                    </button>
                </div>
            )}
        </div>
    );      
}