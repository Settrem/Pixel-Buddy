import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

// Views
import { TriviaCategoryView } from "../views/TriviaViews/TriviaCategoryView";
import { TriviaQuestionView } from "../views/TriviaViews/TriviaQuestionView";
import { TriviaResultView } from "../views/TriviaViews/TriviaResultView";
import { TriviaStartView } from "../views/TriviaViews/TriviaStartView";

// Data
import { chosenCategory, getCategories } from "../triviaSource";

function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

const Trivia = observer(function Trivia(props) {
    // Base State
    const [uiState, setUiState] = useState("TriviaStartView");

    // Data States
    const [categories, setCategories] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    // View Models
    const [currentQuestionText, setCurrentQuestionText] = useState("");
    const [currentShuffledAnswers, setCurrentShuffledAnswers] = useState([]);
    const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState("");

    function writeToBottomText(message) {
        if (props.interfaceModel) {
            props.interfaceModel.setBoxTextTo(message);
        }
    }

    function shuffleArray(data) {
        const shuffled = [...data];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function setupQuestionForView(questionObj) {
        if (!questionObj) return;

        // Decode text
        const decodedQuestion = decodeHtml(questionObj.question);
        const decodedCorrect = decodeHtml(questionObj.correct_answer);
        const decodedIncorrect = questionObj.incorrect_answers.map(decodeHtml);

        // Shuffle answers
        const allAnswers = [...decodedIncorrect, decodedCorrect];
        const shuffled = shuffleArray(allAnswers);

        // Update State
        setCurrentQuestionText(decodedQuestion);
        setCurrentCorrectAnswer(decodedCorrect);
        setCurrentShuffledAnswers(shuffled);

        // Write To Textbox
        writeToBottomText(decodedQuestion);
    }

    useEffect(() => {
        if (uiState !== "categoryChoosing") {
            getCategories()
                .then(data => {
                    const randomized = shuffleArray(data);
                    setCategories(randomized.slice(0, 4));
                })
                .catch(error => console.error("Error fetching categories", error));
        }
    }, [uiState]);

    function startGameACB() {
        setQuestionIndex(0);
        setScore(0);
        setUiState("categoryChoosing");
        writeToBottomText("Please choose a category!");
    }

    function chooseCategoryACB(id) {
        chosenCategory(id)
            .then(data => {
                const results = data.results || data;
                if (results && results.length > 0) {
                    const gameQuestions = results.slice(0, 5);
                    setQuestions(gameQuestions);
                    setupQuestionForView(gameQuestions[0]);
                    setUiState("triviaGame");
                } else {
                    console.error("No questions found in response:", data);
                }
            })
            .catch(console.error);
    }

    function handleAnswerACB(answer) {
        setSelectedAnswer(answer);
        if (answer === currentCorrectAnswer) {
            setScore(prev => prev + 1);
            props.userModel.buddyModel.addHappiness(5);
        }
    }

    function handleNextQuestionACB() {
        const nextIndex = questionIndex + 1;

        if (nextIndex < questions.length) {
            setQuestionIndex(nextIndex);
            setSelectedAnswer(null);
            setupQuestionForView(questions[nextIndex]);
        } else {
            setUiState("gameOver");
            setSelectedAnswer(null);
        }
    }

    function backToBuddyABC() {
        // Change Window something something
    }


    if (uiState === "categoryChoosing") {
        return (
            <TriviaCategoryView
                categories={categories}
                onChooseCategoryACB={chooseCategoryACB}
            />
        );
    }

    if (uiState === "triviaGame") {
        return (
            <TriviaQuestionView
                questionText={currentQuestionText}
                answers={currentShuffledAnswers}
                correctAnswer={currentCorrectAnswer}
                selectedAnswer={selectedAnswer}
                onAnswer={handleAnswerACB}
                onNextQuestion={handleNextQuestionACB}
                currentIndex={questionIndex}
                totalQuestions={questions.length}
            />
        );
    }

    if (uiState === "gameOver") {
        return (
            <TriviaResultView
                score={score}
                total={questions.length}
                setBottomText={writeToBottomText}
                onRestartACB={startGameACB}
                onBackToBuddyABC={backToBuddyABC}
            />
        );
    }

    return (
        <TriviaStartView
            userModel={props.userModel}
            setBottomText={writeToBottomText}
            onTriviaStarterACB={startGameACB}
        />
    );
});

export { Trivia };