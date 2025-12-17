import { LogInView } from "../views/LogInView";
import { useState } from "react";
import { logIn } from "../persistence/firestoreModel";

function LogInPresenter(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    async function sendLogInFormACB() {
        try {
            await logIn(email, password);
            // success → navigate / continue
        } catch (error) {
            console.error("Login error:", error);

            // Map Firebase errors → human text
            if (!email || !password) {
                setErrorMessage("Email and password are required.");
                return;
            }
            if (error.code === "auth/invalid-email") {
                setErrorMessage("Please enter a valid email address.");
            } else if (error.code === "auth/wrong-password") {
                setErrorMessage("Incorrect password.");
            } else {
                setErrorMessage("Login failed. Please try again.");
            }
        }
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