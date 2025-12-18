import '../../styles/App.css';
import { useEffect } from 'react';

export function ApplesStartView({userModel, applesStarterACB, setBottomText }) {
    const message = `PixelBuddies also need to eat! Help ${userModel.buddyModel.name} catch as many apples as possible.`;

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
                    onClick={applesStarterACB}
                >
                    Start Apple Catcher!
                </button>
            </div>
        </div>
    );
}