import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { generateJoke } from "../utils/api_utils/jokeSource";
import { Buddy } from "./BuddyPresenter";
import { StatusBarPresenter } from "./StatusBarPresenter";


function JokeAsBuddyWrapper(props) {
    function writeToBottomText(message) {
        props.interfaceModel.setBoxTextTo(message);
    }
    
    useEffect(() => {
        writeToBottomText(generateJoke());
        props.userModel.buddyModel.addHappiness(5);
        props.userModel.buddyModel.energyLossAfterActivity(3);
    }, []);

      return (
        <div className="h-full w-full">
            <StatusBarPresenter userModel = {props.userModel}/>
            <Buddy model={props.userModel} />
        </div>
    );
}

export { JokeAsBuddyWrapper }