import { observer } from "mobx-react-lite";
import { useState } from "react";

// Views
import { ApplesStartView } from "../views/ApplesViews/ApplesStartView";
import { ApplesGameView } from "../views/ApplesViews/ApplesGameView";
import { ApplesResultView } from "../views/ApplesViews/ApplesResultView";
import { BuddyView } from "../views/BuddyView";

const Apples = observer(function Apples(props) {
    // Base State
    const [uiState, setUiState] = useState("ApplesStartView");

    // Data States
    const [score, setScore] = useState(0);
    const [totalApples, setTotalApples] = useState(10);

    function writeToBottomText(message) {
        if (props.interfaceModel) {
            props.interfaceModel.setBoxTextTo(message);
    }
    }

    function startGameACB() {
        setScore(0);
        setUiState("applesStart");
        writeToBottomText("Current Score: 0");
    }

    function handleScoreUpdateCB(newScore) {
        setScore(newScore);
        writeToBottomText(`Current Score: ${newScore}`);
    }

    function handleGameOverCB(finalScore, maxApples) {
        setUiState("gameOver");
        setTotalApples(maxApples);
        writeToBottomText(`Game Over! Final Score: ${finalScore} / ${maxApples}`);
    }

    function backToBuddyABC() {
        // Change Window something something
    }

    if (uiState === "gameOver") {
        return (
            <ApplesResultView
                score={score}
                total={totalApples}
                setBottomText={writeToBottomText}
                onRestartACB={startGameACB}
                onBackToBuddyABC={backToBuddyABC}
            />
        );
    }

    if (uiState === "applesStart") {
        return (
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
            }}>
                <div style={{ flex: 1, width: "100%", position: "relative" }}>
                    <ApplesGameView
                        onScoreUpdateCB={handleScoreUpdateCB}
                        onGameOverCB={handleGameOverCB}
                    />
                </div>
            </div>
        );
    }

    return (
        <ApplesStartView
            setBottomText={writeToBottomText}
            applesStarterACB={startGameACB}
        />
    );
});

export { Apples };