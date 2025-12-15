import '../../styles/App.css';
import { useEffect } from 'react';

export function ApplesStartView({ applesStarterACB, setBottomText }) {

    useEffect(() => {
        if (setBottomText) {
            setBottomText("PixelBuddies also need to eat! Help (name) catch as many apples as possible.");
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