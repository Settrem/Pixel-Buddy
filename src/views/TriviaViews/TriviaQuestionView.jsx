import '../../styles/App.css';

export function TriviaQuestionView({ answers, correctAnswer, selectedAnswer, onAnswer, onNextQuestion, currentIndex, totalQuestions }) {
    function getButtonColor(answer) {
        if (!selectedAnswer) return "black";

        if (answer === correctAnswer) {
            return "#37a33dff"; // Green
        }
        if (selectedAnswer === answer && answer !== correctAnswer) {
            return "#c02e24ff"; // Red 
        }
        return "black";
    }

    return (
        <div>
            <div className="trivia-text">
                Question {currentIndex + 1} of {totalQuestions}
            </div>

            <div>
                <div className="trivia-grid">
                    {answers.map((answer, index) => (
                        <button
                            key={index}
                            className="cool-btn"
                            style={{ color: getButtonColor(answer) }}
                            onClick={() => !selectedAnswer && onAnswer(answer)}
                            disabled={selectedAnswer !== null}
                        >
                            {answer}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                {selectedAnswer && (
                    <p className="trivia-text">
                        {selectedAnswer === correctAnswer ? "Correct!" : "Incorrect!"}
                    </p>
                )}
            </div>

            {selectedAnswer && (
                <div>
                    <button
                        className="cool-btn trivia-next"
                        onClick={onNextQuestion}
                    >
                        {currentIndex + 1 === totalQuestions ? "See Results" : "Next Question →"}
                    </button>
                </div>
            )}
        </div>
    );
}