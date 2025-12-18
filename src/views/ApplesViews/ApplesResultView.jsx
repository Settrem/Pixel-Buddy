import '../../styles/App.css';
import { useEffect } from 'react';

export function ApplesResultView({ score, total, setBottomText, onRestartACB, onBackToBuddyABC }) {

    useEffect(() => {
        if (setBottomText) {
            setBottomText(`Nice Work! You caught ${score} out of ${total} apples!`);
        }
    }, [score, total, setBottomText]);

    return (
        <div className="trivia-grid trivia-text">
            <h1 style={{
                borderColor: "black",
                fontSize: "2em"
            }}
            >Game Over!</h1>
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <button
                    className="cool-btn"
                    onClick={onBackToBuddyABC}
                >
                    Back To Buddy
                </button>
                <button
                    className="cool-btn"
                    onClick={onRestartACB}
                >
                    Try Again?
                </button>
            </div>
        </div>
    );
}