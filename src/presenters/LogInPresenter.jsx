import { InputFormView } from "../views/InputFormView";
import { useState } from "react";


function LogInPresenter(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const LogInForm = [
        {
            description: "Username",
            stateType: username,
            setStateType: setUsername, 
            placeholder: "Type Your Username...",
            max: 12,
        },

        {
            description: "Password",
            stateType: password,
            setStateType: setPassword, 
            placeholder: "Type Your Password...",
            max: 12,
        },
    ];

    function sendLogInFormACB(){
        console.log("LogIn");
    }

    return (
    <div className="">
        <div>Log In</div>
        <div>  
        <InputFormView
            form = {LogInForm}
            sendFormCB = {sendLogInFormACB}
        />
        </div>
        <div>  
            Don't have an account? Sign Up
        </div>
    </div>
    );
}

export { LogInPresenter }