import { LogInView } from "../views/LogInView";
import { useState } from "react";
import { logIn } from "../persistence/firestoreModel";

function LogInPresenter(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function sendLogInFormACB(){
        console.log(email+ " " + password);
        logIn(email, password);
    }

    return (
    <div className="">
        <LogInView
            email = {email}
            setEmail = {setEmail}
            password = {password}
            setPassword = {setPassword}
            sendLogInFormCB = {sendLogInFormACB}
            switchToSignUpACB = {props.switchToSignUpCB}
        />
    </div>
    );
}

export { LogInPresenter }