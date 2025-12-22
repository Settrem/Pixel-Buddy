import { DeathScreenView } from "../views/DeathScreenView";

function DeathScreenPresenter(props){

    function reviveACB(){
        props.userModel.buddyModel.setBuddyToNull();
    }

    return (
        <div>
            <DeathScreenView
                reviveCB = {reviveACB}
            ></DeathScreenView>
        </div>
    );
}

export { DeathScreenPresenter }