import '../../styles/App.css';
import { useEffect } from 'react';

export function TriviaStartView({ onTriviaStarterACB, setBottomText }) {

    useEffect(() => {
        if (setBottomText) {
            setBottomText("Welcome To Trivia. Are you ready? If you leave before the game ends, 'buddy' won't gain any happiness!");
        }
    }, [setBottomText]);

    return (
        <div>
            <div>
                <button
                    className="cool-btn"
                    onClick={onTriviaStarterACB}
                >
                    Start Trivia!
                </button>
            </div>
        </div>
    );
}