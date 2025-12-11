import { BuddyComponent } from "../components/ui/buddy";
import { customs } from "../model/buddyCustomizations.js"
import { observer } from "mobx-react-lite";

export function ClothesView(props) {
    const Changer = observer(
        function changer(type){
            function pickNextACB(){
                props.pickNextCB(type.iiii);
            }

            function pickFormerACB(){
                props.pickFormerCB(type.iiii);
            }

            return (
                <div className="flex p-2 m-1" style={{backgroundColor:"#523052",}}>
                    <div className="p-[2px]" onClick={pickFormerACB}>
                        <img className="h-[33px] rotate-180" src="./src/assets/gfxfolder/arrow.png"/>
                    </div>
                    <div className="w-[300px] h-[37px]" style={{backgroundColor:"#220022"}}>{customs[type.iiii][props.buddy[type.iiii]]}</div>
                    <div className="p-[2px]" onClick={pickNextACB}>
                        <img className="h-[33px]" src="./src/assets/gfxfolder/arrow.png"/>
                    </div>
                </div>)
        }
    );
    
    return (
        <div className="w-full h-full relative p-5" style={{backgroundColor:"#724072"}}>
            <div style={{fontSize: "30px", color:"#ffffff",  imageRendering:"pixelated", justifyItems:"center"}}>
                <Changer iiii = "buddyType"/>
                <Changer iiii = "clothesHat"/>
                <Changer iiii = "clothesTop"/>
                <Changer iiii = "clothesBottom"/>
                <Changer iiii = "clothesShoes"/>
                <b className="h-5px"/>
                <div className="w-[180px] h-[180px] relative" style={{backgroundColor:"#422042"}}>
                    <BuddyComponent
                    buddy = {props.buddy}
                    />
                </div>
            </div>
        </div>   
    )
}
    function bottomBarText() {
        return (
            // Oh! Are we changing clothes?
            0
        );
}
