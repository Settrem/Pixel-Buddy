import { BuddyComponent } from "../components/ui/buddy";
import { customs } from "../model/buddyCustomizations.js"
import { observer } from "mobx-react-lite";
import { useRef } from "react";
import selection from "../assets/sfx/change_clothes.mp3";

export function ClothesView(props) {
    const Changer = observer(
        function changer(type){
            
            const audioRef = useRef(new Audio(selection));
            
            function pickNextACB(){
                audioRef.current.currentTime = 0;
                audioRef.current.play();
                props.pickNextCB(type.iiii);
            }

            function pickFormerACB(){
                audioRef.current.currentTime = 0;
                audioRef.current.play();
                props.pickFormerCB(type.iiii);
            }

            return (
                <div className="bg-[rgba(0,0,0,0.3)] flex p-2 m-1">
                    <div className="p-[2px]" onClick={pickFormerACB}>
                        <img className="h-[33px] rotate-180" src="/assets/gfxfolder/arrow.png"/>
                    </div>
                    <div className="bg-[rgba(0,0,0,0.5)] w-[200px] sm:w-[300px] h-[37px]">{customs[type.iiii][props.buddy[type.iiii]]}</div>
                    <div className="p-[2px]" onClick={pickNextACB}>
                        <img className="h-[33px]" src="/assets/gfxfolder/arrow.png"/>
                    </div>
                </div>)
        }
    );
    
    return (
        <div className="bg-[var(--theme-color)] w-full h-full relative p-5 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center" style={{fontSize: "30px", color:"#ffffff",  imageRendering:"pixelated", justifyItems:"center"}}>
                <Changer iiii = "buddyType"/>
                <Changer iiii = "clothesHat"/>
                <Changer iiii = "clothesTop"/>
                <Changer iiii = "clothesBottom"/>
                <Changer iiii = "clothesShoes"/>
                <b className="h-5px"/>
                <div className="bg-[rgba(0,0,0,0.3)] w-[180px] h-[180px] relative">
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
