//TODO
/**
 * Make it follow the MVP formula by moving a lot of the functions into TriviaPresenter
 */

import { useState, useEffect } from "react";
import '../../styles/App.css';

function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export function TriviaQuestionView({ setBottomText, question, onAnswer, onNextQuestion, selectedAnswer, currentIndex, totalQuestions }) {
    const [shuffledAnswers, setShuffledAnswers] = useState([]);

    useEffect(() => {
        if (question) {
            const questionText = decodeHtml(question.question);
            setBottomText(questionText);
        }
    }, [question, setBottomText]);

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
            <div className="trivia-text">
                Question {currentIndex + 1} of {totalQuestions}
            </div>

            <div>
                <div className="trivia-grid">
                    {shuffledAnswers.map((answer, index) => (
                        <button
                            key={index}
                            className="trivia-btn"
                            style={{ color: getButtonColor(answer) }}
                            onClick={() => handleAnswerClick(answer)}
                            disabled={selectedAnswer !== null}
                        >
                            {decodeHtml(answer)}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                {!selectedAnswer ? (
                    null
                ) : (
                    <p className = "trivia-text">
                        {selectedAnswer === question.correct_answer ? "Correct!" : "Incorrect!"}
                    </p>
                )}
            </div>

            {selectedAnswer && (
                <div>
                    <button
                        className="trivia-btn trivia-next"
                        onClick={onNextQuestion}
                    >
                        {currentIndex + 1 === totalQuestions ? "See Results" : "Next Question →"}
                    </button>
                </div>
            )}
        </div>
    );
}