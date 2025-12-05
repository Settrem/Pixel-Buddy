import { InputFormView } from "../views/InputFormView";
import { useState } from "react";


function SignUpPresenter(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [buddyName, setBuddyName] = useState("");

    const signUpForm = [
        {
            type: "text",
            description: "Username",
            stateType: username,
            setStateType: setUsername, 
            placeholder: "Choose a Username...",
            max: 12,
        },

        {
            type: "password",
            description: "Password",
            stateType: password,
            setStateType: setPassword, 
            placeholder: "Choose a Password...",
            max: 12,
        },

        {
            type: "text",
            description: "Buddy Name",
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
    <div className="w-[100%] h-fill p-[20px] bg-[rgb(84,92,158)] flex flex-col items-center">
        <div className="text-[70px] fixed top-5">Sign Up</div>
        <div className="w-[80%] fixed top-40">  
            <InputFormView
                form={signUpForm}
                sendFormCB = {sendSignUpFormACB}
            />
        </div>
        <div className="fixed bottom-3 text-[30px] cursor-pointer" onClick={props.switchToLogInACB}>  
            Already have an account? Log In
        </div>
    </div>
    );
}

export { SignUpPresenter }