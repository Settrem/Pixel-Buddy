import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { generateJoke } from "../utils/api_utils/jokeSource";
import { Buddy } from "./BuddyPresenter";


function JokeAsBuddyWrapper(props) {
    function writeToBottomText(message) {
        props.interfaceModel.setBoxTextTo(message);
    }
    
    useEffect(() => {
        writeToBottomText(generateJoke());
    }, []);

    return <Buddy model = {props.userModel}/>;
}

export { JokeAsBuddyWrapper }