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
        <div className="overflow-scroll
            bg-[var(--theme-color)] w-full h-full
            relative p-5 flex flex-col items-center gap-5
            text-4xl"
            style={{scrollbarWidth: "none", msOverflowStyle: "none", }}
            >
            <div className="text-[40px] lg:text-[60px] sm:text-[40px]">
                Question {currentIndex + 1} of {totalQuestions}
            </div>
            <div>
                <div className="trivia-grid">
                    {answers.map((answer, index) => (
                        <div className="w-[90%] sm:w-[80%] text-2xl lg:text-4xl">                            
                            <PixelButton
                                key={index}
                                btnClickCB={() => !selectedAnswer && onAnswer(answer)}
                                disabled={selectedAnswer !== null}
                            >
                                <div style={{ color: getButtonColor(answer) }}>
                                    {answer}
                                </div>
                            </PixelButton>
                        </div>
                    ))}
                </div>
            </div>

            <div className='h-full flex flex-col items-center justify-center'>
                <div>
                    {selectedAnswer && (
                        <p className="text-[40px] lg:text-[60px] sm:text-[40px]">
                            {selectedAnswer === correctAnswer ? "Correct!" : "Incorrect!"}
                        </p>
                    )}
                </div>

                {selectedAnswer && (
                    <div className="text-2xl lg:text-4xl">
                        <PixelButton
                            btnClickCB={onNextQuestion}
                        >
                            {currentIndex + 1 === totalQuestions ? "See Results" : "Next Question →"}
                        </PixelButton>
                    </div>
                )}
            </div>
        </div>
    );
}