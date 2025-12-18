import '../../styles/App.css';
import { PixelButton } from '../../components/ui/PixelButton';
import { useEffect } from 'react';

export function ApplesStartView({userModel, applesStarterACB, setBottomText }) {
    const message = `PixelBuddies also need to eat! Help ${userModel.buddyModel.name} catch as many apples as possible.`;

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
                    className="cool-btn"
                    btnClickCB={applesStarterACB}
                >  
                    <p className="my-5 flex items-center justify-center">Start Apple Catcher!</p>
                </PixelButton>
            </div>
        </div>
    );
}