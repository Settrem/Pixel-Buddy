import { useState, useEffect } from "react";
import '../styles/App.css';

function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export function TriviaQuestionView({ question, onAnswer, onNextQuestion, selectedAnswer }) {
    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    useEffect(() => {
        if (!question) return;

        const allAnswers = [...question.incorrect_answers, question.correct_answer];
        setShuffledAnswers(allAnswers.sort(() => Math.random() - 0.5));
    }, [question]);

    function setButtonClass(answer) {
        if (!selectedAnswer) return "trivia-question";
        if (answer === question.correct_answer) {
            return "trivia-question correct";
        }
        if (answer === selectedAnswer) {
            return "trivia-question wrong";
        }
        return "trivia-question dimmed";
    }

    function handleAnswerClick(answer) {
        if (selectedAnswer) return;
        onAnswer(answer);
    }

    return (
        <div>
            <div className="trivia-center">
                <div className="trivia-grid">
                    {shuffledAnswers.map((answer, index) => (
                        <button
                            key={index}
                            className="trivia-question"
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
                    <p style={{ fontWeight: "bold", fontSize: "2em" }}>
                        {selectedAnswer === question.correct_answer ? "Correct!" : "Incorrect!"}
                    </p>
                )}
            </div>
            {selectedAnswer && (
                <div className="trivia-center" style={{ marginTop: "20px" }}>
                    <button
                        className="trivia-question"
                        onClick={onNextQuestion}
                    >
                        Next Question →
                    </button>
                </div>
            )}
        </div>
    );
}