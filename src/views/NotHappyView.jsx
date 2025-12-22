import { PixelButton } from "../components/ui/PixelButton";

function NotHappyView(){
    return <div className="bg-[var(--theme-color)] w-full h-full flex flex-col gap-10 align-middle items-center justify-center p-5">
        <div className=" text-5xl">
            I'm not in the mood for changing clothes 
        </div>
        <div className="w-max text-4xl">
            <PixelButton btnClickCB={()=> window.location.hash = "/buddy"}>
                Back to Buddy
            </PixelButton>
        </div>
    </div>;
}

export { NotHappyView }