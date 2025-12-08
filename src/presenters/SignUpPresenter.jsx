import { SignUpView } from "../views/SignUpView";
import { useState } from "react";
import { signUp } from "../persistence/firestoreModel";

function SignUpPresenter(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [buddyName, setBuddyName] = useState("");

    function sendSignUpFormACB(){
        console.log(email+ " " + password + " " + buddyName);
        signUp(email, password, buddyName);
    }

    return (
    <div className="">
        <SignUpView
            email = {email}
            setEmail = {setEmail}
            password = {password}
            setPassword = {setPassword}
            buddyName = {buddyName}
            setBuddyName = {setBuddyName}
            sendSignUpFormCB = {sendSignUpFormACB}
            switchToLogInACB = {props.switchToLogInCB}
        />
    </div>
    );
}

export { SignUpPresenter }