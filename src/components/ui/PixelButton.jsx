import { useState, useEffect, useRef } from "react";
import { BORDERTHICKNESS } from "../../constants";
import selection from "../../assets/sfx/selection.mp3";

const DOUBLE = BORDERTHICKNESS * 2;

function PixelButton(props){
    const [isPressed, setIsPressed] = useState(false);
    const [isActive, setIsActive] = useState(false);
    
    const audioRef = useRef(new Audio(selection));
    
    function getLabel() {
        return typeof props.children === "string"
        ? props.children.toLowerCase()
        : "";
    }

    useEffect(() => {
        function updateActive() {
            const label = getLabel();
            const hash = window.location.hash.toLowerCase();
            setIsActive(label && hash.includes(label));
        }

        updateActive(); // run once on mount
        window.addEventListener("hashchange", updateActive);
        return () => window.removeEventListener("hashchange", updateActive);
    }, [props.children]);
    
    const bgColor = isPressed || isActive ? "#cccccc" : "white";

    function clickButtonACB(){
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        props.btnClickCB(props);
    }
    
    return (
        <div 
            className="w-full inline-flex flex-col items-center cursor-pointer"
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onClick={clickButtonACB}
        >
            <div
                style={{
                backgroundColor: bgColor,
                width: `calc(100% - ${DOUBLE}px)`,
                height: `${DOUBLE}px`,
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: `${BORDERTHICKNESS}px`,
                borderBottomWidth: 0, // remove bottom
                marginBottom: `-${BORDERTHICKNESS}px`,
                zIndex: 20,
                }}
            />
            <div 
                className="w-full text-black select-none p-[5px] px-[10px]" 
                style={{
                    backgroundColor: bgColor,
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: `${BORDERTHICKNESS}px`,
                    zIndex: 10,
                }}
            >
                {props.children}
            </div>
            <div
                style={{
                backgroundColor: bgColor,
                width: `calc(100% - ${DOUBLE}px)`,
                height: `${DOUBLE}px`,
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: `${BORDERTHICKNESS}px`,
                borderTopWidth: 0, // remove top
                marginTop: `-${BORDERTHICKNESS}px`,
                zIndex: 20,
                }}
            />
        </div>
    );
}

export { PixelButton }

