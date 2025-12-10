import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function isRGBArray(x) {
    return (
        Array.isArray(x) &&
        x.length === 3 &&
        x.every(n => Number.isInteger(n))
    );
}

export function arrayToRGB(colorArray){
  return `rgb(${colorArray[0]},${colorArray[1]},${colorArray[2]})`;
}