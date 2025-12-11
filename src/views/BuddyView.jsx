import { BuddyComponent } from "../components/ui/buddy";

export function BuddyView(props) {
    function hungerBar(){
        bar = <div/>
    }

    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex overflow-hidden" style={{imageRendering: "pixelated"}}>
                <div className="relative">
                    <img src="./src/assets/gfxfolder/sun.png" className="w-[1800px] h-[1350px]" />
                    <div className="h-2 color-blue absolute"/>
                    <BuddyComponent buddy = {props.buddy}/>
                </div>
            </div>
        </div>
    )
}

    function bottomBarText() {
        return (
            // Here you can let buddy rest for a bit
            0
        );
}
