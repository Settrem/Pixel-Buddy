import { BORDERTHICKNESS } from "../../constants";

const DOUBLE = BORDERTHICKNESS * 2;
const bgColor = "white";

function PixelTextBox(props){
    return (
        <div 
            className="w-full inline-flex flex-col items-center h-[100%]"
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
                className="w-full text-black text-4xl select-none p-[5px] px-[20px] text-left h-full" 
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

export { PixelTextBox }

