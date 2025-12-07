import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { TriviaView } from "../views/TriviaView";
import { TriviaQuestionView } from "../views/TriviaQuestionView";
import { chosenCategory, getCategories } from "../triviaSource";

const Trivia = observer(
    function Trivia({ model }) {
        // Base State
        const [uiState, setUiState] = useState("categoryChoosing")

        // Data States
        const [categories, setCategories] = useState([]);
        const [currentQuestion, setCurrentQuestion] = useState(null);

        const [selectedAnswer, setSelectedAnswer] = useState(null);

        function shuffleTime(data) {
            const shuffled = [...data];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        useEffect(() => {
            if (uiState !== "categoryChoosing") return;

            getCategories()
                .then(data => {
                    const randomized = shuffleTime(data);
                    const randomCategories = randomized.slice(0, 4);

                    setCategories(randomCategories);
                })
                .catch(error => console.error("Error fetching categories", error));
        }, [uiState]);

        function chooseCategoryACB(id) {
            chosenCategory(id).then(data => {
                const results = data.results || data;

                if (results && results.length > 0) {
                    setCurrentQuestion(results[0]);
                    setUiState("categoryChosen");
                } else {
                    console.error("No questions found in response:", data);
                }
            })
                .catch(console.error);
        }

        function handleAnswersACB(selectedAnswer) {
            setSelectedAnswer(selectedAnswer);

            if (selectedAnswer === currentQuestion.correct_answer) {
                console.log("Correct");
            } else {
                console.log("Wrong!");
            }

            if (model && selectedAnswer === currentQuestion.correct_answer) {
                // used for model scoring later
            }
        }

        function handleNextQuestionACB() {
            setUiState("categoryChoosing");

            setCurrentQuestion(null);
            setSelectedAnswer(null);
        }

        if (uiState === "categoryChosen" && currentQuestion) {
            return (
                <TriviaQuestionView
                    question={currentQuestion}
                    selectedAnswer={selectedAnswer}
                    onAnswer={handleAnswersACB}
                    onNextQuestion={handleNextQuestionACB}
                />
            );
        }

        return (
            <TriviaView
                categories={categories}
                chooseCategory={chooseCategoryACB}
            />
        );
    });

export { Trivia };