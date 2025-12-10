import { observer } from "mobx-react-lite";
import { SettingsView } from "../views/SettingsView";
import { useState } from "react";



const Settings = observer(
    function Settings(props) {
        const [buddyName, setBuddyName] = useState("");
        
        const buddyNameForm = [
            {
                type: "text",
                description: "CHANGE YOUR BUDDYS NAME",
                stateType: buddyName,
                setStateType: setBuddyName, 
                placeholder: "Type a new buddyName",
                max: 6,
            },
        ]
        
        const colors = [
            { rgb : [255,0,158], },
            { rgb : [0,0,158], },
            { rgb : [0,0,158], },
            { rgb : [0,0,158], },
            { rgb : [0,0,158], },
            { rgb : [0,0,158], },
        ];

        function changeUIColor(color){
            props.userModel.uiTheme = color;
        }
        
        function changeBuddyNameACB(){
            props.userModel.buddyModel.buddyName = buddyName;
        }
        
        return(
            <div className="w-full h-full">
                <SettingsView
                    colors = {colors}
                    buddyNameForm = {buddyNameForm}
                    sendNewBuddyNameCB = {changeBuddyNameACB}
                    changeColorCB = {changeUIColor}
                />
            </div>
        )
    }
)

export {Settings}