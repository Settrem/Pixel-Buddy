import settingImg from "/assets/gfxfolder/cog.png";
import { useEffect, useState, useRef } from "react";
import selection from "../assets/sfx/selection.mp3";

function SettingsButtonPresenter(){
    const [hash, setHash] = useState(window.location.hash);
    const audioRef = useRef(new Audio(selection));
    
    function clickButtonACB(){
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        window.location.hash = "/settings";
    }

    useEffect(() => {
        const onHashChange = () => setHash(window.location.hash);
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    if (!hash.includes("settings")) {
        return (
            <div className="absolute  top-2 right-2 cursor-default z-50 opacity-30 hover:opacity-100 transition-opacity duration-200">
                <div className=" border-3 p-1 border-black bg-white " onClick = {clickButtonACB}>
                    <img className="h-[25px] w-[25px] " src={settingImg} alt="sdsdsd" style={{imageRendering:"pixelated"}}/>
                </div>
            </div>
        );  
    }
    return null;
}

export { SettingsButtonPresenter }


