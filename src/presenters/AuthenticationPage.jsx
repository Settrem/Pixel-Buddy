import { LogInView } from "../views/LogInView";
import { SignUpView } from "../views/SignUpView";


function AuthenticationPage(props){

  return (
    <div className="">
      <LogInView></LogInView>
      <SignUpView></SignUpView>
    </div>
  );
}

export { AuthenticationPage }