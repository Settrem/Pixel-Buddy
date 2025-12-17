import { useEffect, useRef } from "react";
import { launchGame } from "../../appleGame";

export function ApplesGameView(props) {
    const gameContainerRef = useRef(null);
    const gameInstance = useRef(null);

    useEffect(() => {
        if (gameContainerRef.current && !gameInstance.current) {
            
            const callbacks = {
                onScoreChangeCB: (newScore) => {
                    props.onScoreUpdateCB(newScore);
                },
                onGameOverCB: (finalScore, maxApples) => {
                    props.onGameOverCB(finalScore, maxApples);
                }
            };

            gameInstance.current = launchGame("phaser-game-container", callbacks);
        }

        return () => {
            if (gameInstance.current) {
                gameInstance.current.destroy(true);
                gameInstance.current = null;
            }
        };
    }, []);

    return (
        <div
            id="phaser-game-container"
            ref={gameContainerRef}
        />
    );
}