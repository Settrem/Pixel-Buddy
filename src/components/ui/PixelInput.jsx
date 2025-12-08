import { useState } from "react";
import { BORDERTHICKNESS } from "../../constants";

const DOUBLE = BORDERTHICKNESS * 2;

function PixelInput({ onChange, maxLength, ...props }) {
    const [isFocused, setIsFocused] = useState(false);
    const bgColor = isFocused ? "#e6e6e6" : "white";

    function handleChange(e) {
        onChange && onChange(e.target.value);
    }

    return (
        <div className="w-full inline-flex flex-col items-center">
            <div
                style={{
                    backgroundColor: bgColor,
                    width: `calc(100% - ${DOUBLE}px)`,
                    height: `${DOUBLE}px`,
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: `${BORDERTHICKNESS}px`,
                    borderBottomWidth: 0,
                    marginBottom: `-${BORDERTHICKNESS}px`,
                    zIndex: 20,
                }}
            />

            <input
                {...props}
                maxLength={maxLength}   // ← HERE
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleChange}
                className="w-full text-black text-4xl p-[5px] px-[10px] outline-none"
                style={{
                    backgroundColor: bgColor,
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: `${BORDERTHICKNESS}px`,
                    zIndex: 10,
                }}
            />

            <div
                style={{
                    backgroundColor: bgColor,
                    width: `calc(100% - ${DOUBLE}px)`,
                    height: `${DOUBLE}px`,
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: `${BORDERTHICKNESS}px`,
                    borderTopWidth: 0,
                    marginTop: `-${BORDERTHICKNESS}px`,
                    zIndex: 20,
                }}
            />
        </div>
    );
}


export { PixelInput };
