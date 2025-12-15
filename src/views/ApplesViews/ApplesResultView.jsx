import '../../styles/App.css';
import { useEffect } from 'react';

export function ApplesResultView({ score, total, setBottomText, onRestartACB }) {

    useEffect(() => {
        if (setBottomText) {
            setBottomText(`Nice Work! You caught ${score} out of ${total} apples!`);
        }
    }, [score, total, setBottomText]);

    return (
        <div className="trivia-grid trivia-text">
            <h1>Game Over!</h1>
            <p>
                You scored {score} out of {total}
            </p>
            <div>
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