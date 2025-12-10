import { useState } from "react";
import { BORDERTHICKNESS } from "../../constants";

const DOUBLE = BORDERTHICKNESS * 2;

function PixelButton(props){
    const [isPressed, setIsPressed] = useState(false);
    const bgColor = isPressed ? "#cccccc" : "white";

    function clickButtonACB(){
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

