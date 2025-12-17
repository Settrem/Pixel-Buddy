import { SignUpView } from "../views/SignUpView";
import { useState } from "react";
import { signUp } from "../persistence/firestoreModel";

function SignUpPresenter(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [buddyName, setBuddyName] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    async function sendSignUpFormACB() {
        // 🔹 Basic client-side validation
        if (!email || !password || !buddyName) {
            setErrorMessage("All fields are required.");
            return;
        }

        if (buddyName.length > 6) {
            setErrorMessage("Buddy name must be 6 characters or less.");
            return;
        }

        try {
            await signUp(email, password, buddyName);
        } catch (error) {
            console.error("Sign up failed:", error);
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
        }
    }

    return (
    <div className="">
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
    </div>
    );
}

export { SignUpPresenter }