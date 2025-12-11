import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { ApplesStartView } from "../views/ApplesViews/ApplesStartView";
import { ApplesGameView } from "../views/ApplesViews/ApplesGameView";

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

        if (uiState === "applesStart") {
            return (
                <ApplesGameView
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