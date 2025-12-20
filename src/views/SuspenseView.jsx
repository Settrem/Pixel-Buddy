import loading from "../../public/assets/gfxfolder/loading.gif"; 

export function SuspenseView(){
    return <div className="bg-[rgb(84,92,158)] w-full h-full flex align-middle items-center justify-center border-[10px] border-black">
        <div className="h-full w-full flex align-middle items-center justify-center border-[5px] border-black/30">
            <img src={loading} alt="its loading" />
        </div>
    </div>;
}