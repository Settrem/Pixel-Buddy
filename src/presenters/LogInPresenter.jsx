import { LogInView } from "../views/LogInView";
import { useState } from "react";
import { logIn } from "../persistence/firestoreModel";
import { SuspenseView } from "../views/SuspenseView";

function LogInPresenter(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [loginPromise, setLoginPromise] = useState(null);
    const [loginError, setLoginError] = useState(null);

    async function sendLogInFormACB() {
        if (!email || !password) {
            setErrorMessage("Email and password are required.");
            return;
        }

        const promise = logIn(email, password);
        setLoginPromise(promise);
        setLoginError(null);

        // success → navigate / continue
        promise.catch(error => {
            console.error("Login error:", error);
            setLoginError(error);

            if (error.code === "auth/invalid-email") {
                setErrorMessage("Please enter a valid email address.");
            } else if (error.code === "auth/wrong-password") {
                setErrorMessage("Incorrect password.");
            } else {
                setErrorMessage("Login failed. Please try again.");
            }
        });
    }

    if (loginPromise && !loginError) {
        return (
            <SuspenseView/>
        );
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
            errorMessage={errorMessage}
            clearError={() => setErrorMessage(null)}
        />
    </div>
    );
}

export { LogInPresenter }