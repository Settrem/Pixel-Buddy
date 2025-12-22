import { observer } from "mobx-react-lite";
import { HelpView } from "../views/HelpView";

const Help = observer(
    function Help() {        
        
        return(
            <div className="w-full h-full">
                <HelpView
                />
            </div>
        )
    }
)

export {Help}