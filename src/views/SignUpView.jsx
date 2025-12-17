import { InputFormView } from "../views/InputFormView";
import { PixelDialogPopUp } from "../components/ui/PixelDialogPopUp";
import { useState } from "react";


function SignUpView(props){

    const signUpForm = [
        {
            type: "text",
            description: "Email",
            stateType: props.email,
            setStateType: props.setEmail, 
            placeholder: "Pick your Email...",
            max: 128,
        },

        {
            type: "password",
            description: "Password",
            stateType: props.password,
            setStateType: props.setPassword, 
            placeholder: "Choose a Password...",
            max: 32,
        },

        {
            type: "text",
            description: "Buddy Name",
            stateType: props.buddyName,
            setStateType: props.setBuddyName, 
            placeholder: "Pick a name for your buddy...",
            max: 6,
        },
    ];

    function sendSignUpFormACB(){
        props.sendSignUpFormCB();
    }

    return (
    <div className="w-screen border-[10px] border-black h-screen">

        {props.errorMessage && (
            <PixelDialogPopUp
                type="Error"
                onClose={props.clearError}
            >
                {props.errorMessage}
            </PixelDialogPopUp>
        )}

        <div className="w-[100%] border-[5px] border-black/30 h-[100%] p-[20px] bg-[rgb(84,92,158)] flex flex-col items-center">
            <div className="text-[70px] fixed top-8">Sign Up</div>
            <div className="w-[80%] fixed top-42 text-[50px]">  
                <InputFormView
                    form={signUpForm}
                    sendFormCB = {sendSignUpFormACB}
                    children = {"Sign up"}
                />
            </div>
            <div className="fixed bottom-5 text-[30px] cursor-pointer" onClick={props.switchToLogInACB}>  
                Already have an account? Log In
            </div>
        </div>
    </div>
    );
}

export { SignUpView }