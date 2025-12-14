import { useState } from "react";
import { BORDERTHICKNESS } from "../../constants";
import { observer } from "mobx-react-lite";

const DOUBLE = BORDERTHICKNESS * 2;


const PixelStatusBar = observer(
function PixelStatusBar(props){
    return (
        <div 
            className="w-full h-[30px] flex flex-row items-center cursor-pointer gap-[5px]"
        >
            <img className="h-full w-10" src={props.statusImage} alt="" />
            <div 
                className="w-full h-full select-none flex flex-row items-baseline" 
                style={{
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: `${BORDERTHICKNESS}px`,
                }}
            >
                <div className="h-full"
                    style={{
                        width: `${props.status}%`,
                        backgroundColor: props.statusColor,
                    }}  
                />
            </div>
        </div>
    );
});

export { PixelStatusBar }

