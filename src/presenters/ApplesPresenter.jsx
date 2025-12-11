import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { ApplesStartView } from "../views/ApplesViews/ApplesStartView";
import { ApplesGameView } from "../views/ApplesViews/ApplesGameView";
import { ApplesResultView } from "../views/ApplesViews/ApplesResultView";

const Apples = observer(
    function Apples(props) {

        const [uiState, setUiState] = useState("ApplesStartView");
        const [score, setScore] = useState(0);

        function writeToBottomText(message) {
            props.interfaceModel.setBoxTextTo(message);
        }

        function applesStarterACB() {
            setUiState("applesStart");
        }

        // Renders and Removes Sprites From Screen
        function clearAllSprites() {
            
        }

        function renderAllSprites() {
            props.basketModel.Basket();
            props.appleModel.Apples();
        }

        function startCountDown() {
        
        }

        function spawnApples() {
            
        }
        

        if (uiState === "gameOver") {
            return (
                <ApplesResultView
                    setBottomText={writeToBottomText}
                />
            )
        }

        if (uiState === "applesStart") {
            return (
                <ApplesGameView
                    clearSprites={clearAllSprites}
                    renderSprites={renderAllSprites}
                    countDown={startCountDown}
                    appleSpawn={spawnApples}
                    setBottomText={writeToBottomText}
                />
            );
        }

        return (
            <ApplesStartView
                setBottomText={writeToBottomText}
                applesStarter={applesStarterACB}
            />
        );
    })

export { Apples };