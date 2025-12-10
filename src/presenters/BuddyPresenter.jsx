import { observer } from "mobx-react-lite";
import { BuddyView } from "../views/BuddyView";

export const Buddy = observer(
    function buddy(props) {
        return <BuddyView
        buddy = {props.model.buddyModel}
        hunger = {props.model.buddyModel.stats.hunger}
        />
    }
)