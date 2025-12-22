import { observer } from "mobx-react-lite";
import { SettingsView } from "../views/SettingsView";
import { useState } from "react";
import { logOut } from "../persistence/firestoreModel";

const Settings = observer(
    function Settings(props) {
        const [buddyName, setBuddyName] = useState("");
        
        const colors = [
            { rgb : [255,255,255], },
            { rgb : [46,76,102], },
            { rgb : [102,46,47], },
            { rgb : [55,102,46], },
            { rgb : [139,139,168], },
            { rgb : [78,46,102], },
            { rgb : [46,102,102], },
            { rgb : [135,74,37], },
        ];

        function changeUIColor(color){
            props.userModel.setUiThemeTo(color);
        }
        
        function changeBuddyNameACB(){
            props.userModel.buddyModel.name = buddyName;
        }

        async function logOutACB(){
            await logOut();
        }
        
        return(
            <div className="w-full h-full">
                <SettingsView
                    colors = {colors}
                    sendNewBuddyNameCB = {changeBuddyNameACB}
                    changeColorCB = {changeUIColor}
                    buddyName = {buddyName}
                    setBuddyName = {setBuddyName}
                    logOut = {logOutACB} 
                />
            </div>
        )
    }
)

export {Settings}