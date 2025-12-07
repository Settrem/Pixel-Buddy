import { LogInView } from "../views/LogInView";
import { useState } from "react";


function LogInPresenter(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function sendLogInFormACB(){
        console.log(email+ " " + password);
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