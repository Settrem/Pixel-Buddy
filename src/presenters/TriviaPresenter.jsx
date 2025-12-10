import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { TriviaCategoryView } from "../views/TriviaViews/TriviaCategoryView";
import { TriviaQuestionView } from "../views/TriviaViews/TriviaQuestionView";
import { TriviaResultView } from "../views/TriviaViews/TriviaResultView";
import { TriviaStartView } from "../views/TriviaViews/TriviaStartView";
import { chosenCategory, getCategories } from "../triviaSource";

const Trivia = observer(
    function Trivia(props) {
        // Base State
        const [uiState, setUiState] = useState("TriviaStart");

        // Data States
        const [categories, setCategories] = useState([]);
        const [questions, setQuestions] = useState([]);
        const [currentQuestion, setCurrentQuestion] = useState(null);
        const [questionIndex, setQuestionIndex] = useState(0);
        const [score, setScore] = useState(0);
        const [selectedAnswer, setSelectedAnswer] = useState(null);

        function writeToBottomText(message) {
            props.interfaceModel.setBoxTextTo(message);
        }

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
                setScore(prevScore => prevScore + 1);
            } else {
                return;
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

        function triviaStarterACB() {
            setUiState("categoryChoosing");
        }

        if (uiState === "gameOver") {
            return (
                <TriviaResultView
                    setBottomText={writeToBottomText}
                    score={score}
                    total={questions.length}
                />
            );
        }

        if (uiState === "categoryChosen") {
            return (
                <TriviaQuestionView
                    setBottomText={writeToBottomText}
                    question={currentQuestion}
                    selectedAnswer={selectedAnswer}
                    onAnswer={handleAnswersACB}
                    onNextQuestion={handleNextQuestionACB}
                    currentIndex={questionIndex}
                    totalQuestions={questions.length}
                />
            );
        }

        if (uiState === "categoryChoosing") {
            return (
                <TriviaCategoryView
                    setBottomText={writeToBottomText}
                    categories={categories}
                    chooseCategory={chooseCategoryACB}
                />
            );
        }

        return (
            <TriviaStartView
                setBottomText={writeToBottomText}
                triviaStarter={triviaStarterACB}
            />
        );
    });

export { Trivia };