import { observer } from "mobx-react-lite";
import { BuddyView } from "../views/BuddyView";

const Buddy = observer(
    function buddyPresenter(props) {
        return <BuddyView
        buddy = {props.model.buddyModel}
        hunger = {props.model.buddyModel.stats.hunger}
        />
    }
)

export { Buddy }