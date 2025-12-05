
import { SignUpPresenter } from "./SignUpPresenter";
import { LogInPresenter } from "./LogInPresenter";


function AuthenticationPage(props){

  return (
    <div className="">
      <LogInPresenter></LogInPresenter>
      <SignUpPresenter></SignUpPresenter>
    </div>
  );
}

export { AuthenticationPage }