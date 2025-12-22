import { SignUpView } from "../views/SignUpView";
import { useState } from "react";
import { signUp } from "../persistence/firestoreModel";
import { SuspenseView } from "../views/SuspenseView";

function SignUpPresenter(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [buddyName, setBuddyName] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [signUpPromise, setSignUpPromise] = useState(null);
    const [signUpError, setSignUpError] = useState(null);

    async function sendSignUpFormACB() {
        if (!email || !password || !buddyName) {
            setErrorMessage("All fields are required.");
            return;
        }

        if (buddyName.length > 6) {
            setErrorMessage("Buddy name must be 6 characters or less.");
            return;
        }

        const promise = signUp(email, password, buddyName);
        setSignUpPromise(promise);
        setSignUpError(null);

        promise.catch(error => {
            console.error("Sign up failed:", error);
            setSignUpError(error);

            switch (error.code) {
                case "auth/invalid-email":
                    setErrorMessage("Please enter a valid email address.");
                    break;
                case "auth/email-already-in-use":
                    setErrorMessage("This email is already registered.");
                    break;
                case "auth/weak-password":
                    setErrorMessage("Password must be at least 6 characters.");
                    break;
                default:
                    setErrorMessage("Sign up failed. Please try again.");
            }
        });
    }

    if (signUpPromise && !signUpError) {
        return (
            <SuspenseView/>
        );
    }

    return (
    <SignUpView
        email = {email}
        setEmail = {setEmail}
        password = {password}
        setPassword = {setPassword}
        buddyName = {buddyName}
        setBuddyName = {setBuddyName}
        sendSignUpFormCB = {sendSignUpFormACB}
        switchToLogInACB = {props.switchToLogInCB}
        errorMessage={errorMessage}
        clearError={() => setErrorMessage(null)}
    />
    );
}

export { SignUpPresenter }