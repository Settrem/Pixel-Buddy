import { useEffect, useRef, useState } from "react";
import { launchGame } from "../../appleGame";

export function ApplesGameView(props) {
    const gameContainerRef = useRef(null);
    const gameInstance = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (gameContainerRef.current && !gameInstance.current) {

            const callbacks = {
                onScoreChangeCB: props.onScoreUpdateCB,
                onGameOverCB: props.onGameOverCB
            };

            gameInstance.current = launchGame(
                "phaser-game-container",
                callbacks,
                () => setLoading(false) // 🔥 hide loading div
            );
        }

        return () => {
            if (gameInstance.current) {
                gameInstance.current.destroy(true);
                gameInstance.current = null;
            }
        };
    }, []);

    return (
        <div className="relative w-full h-full">
            {loading && (
                <div className="absolute inset-0 z-50 flex items-center justify-center p-5 bg-[var(--theme-color)]">
                    <span className="text-4xl font-bold">Get ready to catch the apples!!!</span>    
                </div>
            )}

            <div
                id="phaser-game-container"
                ref={gameContainerRef}
                className="w-full h-full"
            />
        </div>
    );
}
