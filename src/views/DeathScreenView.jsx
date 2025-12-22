import { PixelButton } from "../components/ui/PixelButton";

function DeathScreenView(props){

    function reviveACB(){
        props.reviveCB();
    }

    return(
        <div className="bg-[var(--theme-color)] border-[10px] border-black w-screen h-screen flex flex-col gap-10 align-middle items-center justify-center p-5">
            <div className=" text-5xl">
                Your buddy has sadly passed away, remember to feed your buddy! 
            </div>
            <img className = "h-30" src="/assets/gfxfolder/grave.png" alt="RIP" style={{imageRendering:"pixelated"}} />
            <div className="w-max text-4xl">
                <PixelButton btnClickCB={reviveACB}>
                    Revive Buddy
                </PixelButton>
            </div>
        </div>
    );
}

export { DeathScreenView }