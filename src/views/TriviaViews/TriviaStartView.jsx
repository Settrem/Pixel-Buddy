import '../../styles/App.css';
import { useEffect } from 'react';

export function TriviaStartView({ userModel, onTriviaStarterACB, setBottomText }) {

        const message = `Welcome To Trivia. Are you ready? If you leave before the game ends, ${userModel.buddyModel.name} won't gain any happiness!`;

    useEffect(() => {
        if (setBottomText) {
            setBottomText(message);
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