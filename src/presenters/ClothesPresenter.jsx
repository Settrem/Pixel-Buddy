import { observer } from "mobx-react-lite";
import { ClothesView } from "../views/ClothesView";
import { NotHappyView } from "../views/NotHappyView";
import { StatusBarPresenter } from "./StatusBarPresenter";

export const Clothes = observer(
    function clothes(props) {
        function pickNextACB(type) {
            props.model.buddyModel.changeClothes(type, 1)
        }
        function pickFormerACB(type) {
            props.model.buddyModel.changeClothes(type, -1)
        }

        function writeToBottomText(message) {
            if (props.interfaceModel) {
                props.interfaceModel.setBoxTextTo(message);
            }
        }

        if(props.model.buddyModel.stats.energy <= 0){
            writeToBottomText("I'm not in the mood to change clothes right now, maybe you could cheer me up");
            return(
                <div className="w-full h-full">
                    <StatusBarPresenter userModel = {props.model}/>
                    <NotHappyView></NotHappyView>
                </div>
            );
        }

        return <ClothesView
        buddy = {props.model.buddyModel}
        pickNextCB = {pickNextACB}
        pickFormerCB = {pickFormerACB}
        />
    }
)