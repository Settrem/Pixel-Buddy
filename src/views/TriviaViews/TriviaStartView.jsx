import '../../styles/App.css';
import { useEffect } from 'react';
import { PixelButton } from '../../components/ui/PixelButton';

export function TriviaStartView({ userModel, onTriviaStarterACB, setBottomText }) {

        const message = `Welcome To Trivia. Are you ready? If you leave before the game ends, ${userModel.buddyModel.name} won't gain any happiness!`;

    useEffect(() => {
        if (setBottomText) {
            setBottomText(message);
        }
    }, [setBottomText]);

    return (
        <div className="
            bg-[var(--theme-color)] w-full h-full
            relative p-5 flex flex-col items-center justify-center
            text-4xl
            ">
            <div className="w-[60%] h-auto">
                <PixelButton
                    btnClickCB={onTriviaStarterACB}
                >
                    <p className="my-5 flex items-center justify-center">Start Trivia!</p>
                </PixelButton>
            </div>
        </div>
    );
}