import { PixelButton } from "../components/ui/PixelButton";
import settingImg from "/assets/gfxfolder/loading.gif";
import { useEffect, useState } from "react";

function SettingsButtonPresenter(){
    const [hash, setHash] = useState(window.location.hash);

    useEffect(() => {
        const onHashChange = () => setHash(window.location.hash);
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    if (!hash.includes("settings")) {
        return (
            <div className="absolute fixed top-5 right-5 cursor-default z-50 opacity-30 hover:opacity-100 transition-opacity duration-200">
                <PixelButton btnClickCB = {() => window.location.hash = "/settings"}>
                    <img src={settingImg} alt="sdsdsd" />
                </PixelButton>
            </div>
        );  
    }
    return null;
}

export { SettingsButtonPresenter }