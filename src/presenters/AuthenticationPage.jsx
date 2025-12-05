import { useState } from "react";
import { SignUpPresenter } from "./SignUpPresenter";
import { LogInPresenter } from "./LogInPresenter";


function AuthenticationPage(props){
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="flex align-center justify-center w-[100%] h-screen  bg-[rgb(84,92,158)]">
      {showSignUp ? (
        <SignUpPresenter switchToLogInACB={() => setShowSignUp(false)} />
      ) : (
        <LogInPresenter switchToSignUpACB={() => setShowSignUp(true)} />
      )}
    </div>
  );
}

export { AuthenticationPage }