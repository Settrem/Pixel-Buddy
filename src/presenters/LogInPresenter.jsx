import { InputFormView } from "../views/InputFormView";
import { useState } from "react";


function LogInPresenter(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const LogInForm = [
        {
            type: "text",
            description: "Username",
            stateType: username,
            setStateType: setUsername, 
            placeholder: "Type Your Username...",
            max: 12,
        },

        {
            type: "password",
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
    <div className="w-[100%] border-[10px] border-black h-fill">
        <div className="w-[100%] border-[5px] border-black/30 h-[100%] p-[20px] bg-[rgb(84,92,158)] flex flex-col items-center">
            <div className="text-[70px] fixed top-8">Log In</div>
            <div className="w-[80%] fixed top-42">  
                <InputFormView
                    form = {LogInForm}
                    sendFormCB = {sendLogInFormACB}
                />
            </div>
            <div className="fixed bottom-5 text-[30px] cursor-pointer" onClick={props.switchToSignUpACB}>  
                Don't have an account? Sign Up
            </div>
        </div>
    </div>
    );
}

export { LogInPresenter }