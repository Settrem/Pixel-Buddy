import '../../styles/App.css';
import { useEffect } from 'react';
import { PixelButton } from '../../components/ui/PixelButton';

export function ApplesResultView({ score, total, setBottomText, onRestartACB, onBackToBuddyABC }) {

    useEffect(() => {
        if (setBottomText) {
            setBottomText(`Nice Work! You caught ${score} out of ${total} apples!`);
        }
    }, [score, total, setBottomText]);

    return (
        <div className="bg-[var(--theme-color)] w-full h-full
            relative p-5 flex flex-col gap-5 items-center justify-center
            text-4xl">
            <h1 style={{
                borderColor: "black",
                fontSize: "2em"
            }}
            >Game Over!</h1>
            <div className=" flex flex-col gap-5">
                <PixelButton
                    className="cool-btn"
                    btnClickCB={onBackToBuddyABC}
                >
                    Back To Buddy
                </PixelButton>
                <PixelButton
                    className="cool-btn"
                    btnClickCB={onRestartACB}
                >
                    Try Again?
                </PixelButton>
            </div>
        </div>
    );
}
