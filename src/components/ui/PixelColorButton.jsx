import { useState } from "react";
import { BORDERTHICKNESS } from "../../constants";
import selection from "../../assets/sfx/selection.mp3";
import { useRef } from "react";


const DOUBLE = BORDERTHICKNESS * 2;

function PixelColorButton(props){
    const colorArray = props.color; // [84,92,158]
    const [isPressed, setIsPressed] = useState(false);
    const bgColor = isPressed ? `rgb(128,128,128)`
    : `rgb(${colorArray[0]},${colorArray[1]},${colorArray[2]})`;

    const audioRef = useRef(new Audio(selection));

    function clickButtonACB(){
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        props.changeColorCB(props.color);
    }

    return (
        <div 
            className="w-full h-full inline-flex flex-col items-center cursor-pointer"
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
                    zIndex: 40,
                }}
            />
            <div 
                className="w-full h-full text-black text-4xl select-none p-[5px] px-[10px]" 
                style={{
                    backgroundColor: bgColor,
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: `${BORDERTHICKNESS}px`,
                    zIndex: 30,
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
                zIndex: 40,
                }}
            />
        </div>
    );
}

export { PixelColorButton }

