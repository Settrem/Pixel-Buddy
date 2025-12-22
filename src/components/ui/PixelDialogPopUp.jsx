import { BORDERTHICKNESS } from "../../constants";
import { observer } from "mobx-react-lite";
import { useRef, useEffect } from "react";

const DOUBLE = BORDERTHICKNESS * 2;

function PixelDialogPopUp(props){
    return (
        <div className="fixed bg-black/30 z-100 w-full h-full m-0 flex items-center justify-center">
            <div className="relative flex flex-col items-center bg-[rgb(84,92,158)] w-[80%] h-[30%] sm:w-[50%] sm:h-[30%]"
                style={{
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: `${BORDERTHICKNESS}px`,
                }}
            >
                <div className="text-[40px] sm:text-[50px] h-max">
                    {props.type}
                </div>
                <div className="text-[25px] flex flex-col items-center justify-center sm:text-[30px] h-full w-full px-5 mb-[70px]">
                    {props.children}
                </div>
                <div className="cursor-pointer absolute right-0 h-7 w-7 mt-3 mr-3 bg-white flex items-center justify-center text-2xl"
                style={{
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: `5px`,
                }}
                onClick={props.onClose}
                > x </div>
            </div>
        </div>
    );
};

export { PixelDialogPopUp }

