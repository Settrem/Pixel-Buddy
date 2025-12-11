import { observer } from "mobx-react-lite";
import { ClothesView } from "../views/ClothesView";

export const Clothes = observer(
    function clothes(props) {
        function pickNextACB(type) {
            props.model.buddyModel.changeClothes(type, 1)
        }
        function pickFormerACB(type) {
            props.model.buddyModel.changeClothes(type, -1)
        }

        return <ClothesView
        buddy = {props.model.buddyModel}
        pickNextCB = {pickNextACB}
        pickFormerCB = {pickFormerACB}
        />
    }
)