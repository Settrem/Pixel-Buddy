import { InputFormView } from "../views/InputFormView";
import { useState } from "react";


function SignUpPresenter(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [buddyName, setBuddyName] = useState("");

    const signUpForm = [
        {
            description: "Username",
            stateType: username,
            setStateType: setUsername, 
            placeholder: "Choose a Username...",
            max: 12,
        },

        {
            description: "Password",
            stateType: password,
            setStateType: setPassword, 
            placeholder: "Choose a Password...",
            max: 12,
        },

        {
            description: "Choose Your Buddy's Name",
            stateType: buddyName,
            setStateType: setBuddyName, 
            placeholder: "Pick a name for your buddy...",
            max: 6,
        },
    ];

    function sendSignUpFormACB(){
        console.log("SignUps");
    }

    return (
    <div className="">
        <div>Sign Up</div>
        <div>  
        <InputFormView
            form={signUpForm}
            sendFormCB = {sendSignUpFormACB}
        />
        </div>
        <div>  
            Already have an account? Log In
        </div>
    </div>
    );
}

export { SignUpPresenter }