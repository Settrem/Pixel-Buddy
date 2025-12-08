import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { TriviaView } from "../views/TriviaView";
import { TriviaQuestionView } from "../views/TriviaQuestionView";
import { TriviaResultView } from "../views/TriviaResultView";
import { chosenCategory, getCategories } from "../triviaSource";

const Trivia = observer(
    function Trivia({ model }) {
        // Base State
        const [uiState, setUiState] = useState("categoryChoosing");

        // Data States
        const [categories, setCategories] = useState([]);
        const [questions, setQuestions] = useState([]);
        const [currentQuestion, setCurrentQuestion] = useState(null);
        const [questionIndex, setQuestionIndex] = useState(0); 
        const [score, setScore] = useState(0);
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
                    const gameQuestions = results.slice(0, 5);
                    
                    setQuestions(gameQuestions);
                    setCurrentQuestion(gameQuestions[0]);
                    setQuestionIndex(0);
                    setScore(0);
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
                setScore(prevScore => prevScore + 1); 
            } else {
                console.log("Wrong!");
            }

            if (model && selectedAnswer === currentQuestion.correct_answer) {
            }
        }

        function handleNextQuestionACB() {
            const nextIndex = questionIndex + 1;

            if (nextIndex < questions.length) {
                setQuestionIndex(nextIndex);
                setCurrentQuestion(questions[nextIndex]);
                setSelectedAnswer(null);
            } else {
                setUiState("gameOver");
                setCurrentQuestion(null);
                setSelectedAnswer(null);
            }
        }

        function handleRestartACB() {
            setUiState("categoryChoosing");
            setScore(0);
            setQuestions([]);
        }

        if (uiState === "gameOver") {
            return (
                <TriviaResultView 
                    score={score} 
                    total={questions.length} 
                    onRestart={handleRestartACB} 
                />
            );
        }

        if (uiState === "categoryChosen" && currentQuestion) {
            return (
                <TriviaQuestionView
                    question={currentQuestion}
                    selectedAnswer={selectedAnswer}
                    onAnswer={handleAnswersACB}
                    onNextQuestion={handleNextQuestionACB}
                    currentIndex={questionIndex} // Optional: To show "Question 1/5"
                    totalQuestions={questions.length}
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