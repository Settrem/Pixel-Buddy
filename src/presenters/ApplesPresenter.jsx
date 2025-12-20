import { observer } from "mobx-react-lite";
import { useState } from "react";

// Views
import { ApplesStartView } from "../views/ApplesViews/ApplesStartView";
import { ApplesGameView } from "../views/ApplesViews/ApplesGameView";
import { ApplesResultView } from "../views/ApplesViews/ApplesResultView";
import { NoEnergyGameView } from "../views/NoEnergyGameView";
import { StatusBarPresenter } from "./StatusBarPresenter";
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
        props.userModel.buddyModel.energyLossAfterActivity(20);
        setUiState("applesStart");
        writeToBottomText("Current Score: 0");
    }

    function handleScoreUpdateCB(newScore) {
        props.userModel.buddyModel.addHunger(10);
        setScore(newScore);
        writeToBottomText(`Current Score: ${newScore}`);
    }

    function handleGameOverCB(finalScore, maxApples) {
        setUiState("gameOver");
        setTotalApples(maxApples);
        writeToBottomText(`Game Over! Final Score: ${finalScore} / ${maxApples}`);
    }

    function backToBuddyABC() {
        window.location.hash = "/buddy";
    }

    if(props.userModel.buddyModel.stats.energy <= 0){
        writeToBottomText("Maybe we should take a break, please come back in some time and I may be fully rested up !!! ");
        return(
            <div className="w-full h-full">
                <div className="absolute opacity-30 hover:opacity-100 transition-opacity duration-200">
                    <StatusBarPresenter userModel = {props.userModel}/>
                </div>
                <NoEnergyGameView></NoEnergyGameView>
            </div>
        );
    }

    if (uiState === "gameOver") {
        return (
            <div className="w-full h-full">
                <StatusBarPresenter userModel = {props.userModel}/>
                <ApplesResultView
                    score={score}
                    total={totalApples}
                    setBottomText={writeToBottomText}
                    onRestartACB={startGameACB}
                    onBackToBuddyABC={backToBuddyABC}
                />
            </div>
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
                <StatusBarPresenter userModel = {props.userModel}/>
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
        <div className="w-full h-full">
            <StatusBarPresenter userModel = {props.userModel}/>
            <ApplesStartView
                userModel={props.userModel}
                setBottomText={writeToBottomText}
                applesStarterACB={startGameACB}
            />
        </div>
    );
});

export { Apples };