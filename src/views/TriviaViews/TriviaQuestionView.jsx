import '../../styles/App.css';
import { PixelButton } from '../../components/ui/PixelButton';

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
        <div className="
            bg-[var(--theme-color)] w-full h-full
            relative p-5 flex flex-col items-center justify-center
            text-4xl
            ">
            <div className="trivia-text">
                Question {currentIndex + 1} of {totalQuestions}
            </div>
            <div>
                <div className="trivia-grid">
                    {answers.map((answer, index) => (
                        <div className="w-[40%]">                            
                            <PixelButton
                                key={index}
                                className="cool-btn"
                                style={{ color: getButtonColor(answer) }}
                                btnClickCB={() => !selectedAnswer && onAnswer(answer)}
                                disabled={selectedAnswer !== null}
                            >
                                {answer}
                            </PixelButton>
                        </div>
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
                    <PixelButton
                        className="cool-btn trivia-next"
                        btnClickCB={onNextQuestion}
                    >
                        {currentIndex + 1 === totalQuestions ? "See Results" : "Next Question →"}
                    </PixelButton>
                </div>
            )}
        </div>
    );
}