import { InputFormView } from "../views/InputFormView";
import { useState } from "react";


function LogInView(props){

    const LogInForm = [
        {
            type: "text",
            description: "Email",
            stateType: props.email,
            setStateType: props.setEmail, 
            placeholder: "Type your Email...",
            max: 128,
        },

        {
            type: "password",
            description: "Password",
            stateType: props.password,
            setStateType: props.setPassword, 
            placeholder: "Type Your Password...",
            max: 32,
        },
    ];

    function sendLogInFormACB(){
        props.sendLogInFormCB();
    }

    return (
    <div className="w-screen border-[10px] border-black h-screen">
        <div className="w-[100%] border-[5px] border-black/30 h-[100%] p-[20px] bg-[rgb(84,92,158)] flex flex-col items-center">
            <div className="text-[70px] fixed top-8">Log In</div>
            <div className="w-[80%] fixed top-42 text-[50px]">  
                <InputFormView
                    form = {LogInForm}
                    sendFormCB = {sendLogInFormACB}
                    children = {"Log In"}
                />
            </div>
            <div className="fixed bottom-5 text-[30px] cursor-pointer" onClick={props.switchToSignUpACB}>  
                Don't have an account? Sign Up
            </div>
        </div>
    </div>
    );
}

export { LogInView }