import { customs } from "../../model/buddyCustomizations.js"
import { observer } from "mobx-react-lite";

const BuddyComponent = observer(
    function BuddyComponent(props){
        function getClothing(type){
            if ([props.buddy[type]] > 0) return <img src={"/assets/gfxfolder/" + type + "/" + customs[type][props.buddy[type]] + ".png"} className="absolute w-[180px]"/>
            return
        }

        return(
            <div class="absolute inset-0 flex justify-center items-center" style={{imageRendering: "pixelated"}}>
                <img src={"/assets/gfxfolder/body/" + customs.buddyType[props.buddy.buddyType] + ".png"} className="absolute w-[180px]"/>
                {getClothing("clothesShoes")}
                {getClothing("clothesBottom")}
                {getClothing("clothesTop")}
                <img src={"/assets/gfxfolder/head/" + customs.buddyType[props.buddy.buddyType] + ".png"} className="absolute w-[180px]"/>
                {getClothing("clothesHat", props.buddy.clothesHat)}               
            </div>
        )
    }
);

export { BuddyComponent }
