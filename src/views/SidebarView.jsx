import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState, useRef, useEffect  } from "react";
import { PixelButton } from "../components/ui/PixelButton";
import { BORDERTHICKNESS } from "../constants";

function SidebarView(props) {

    function renderSidebarsCB(btn){

        function sidebarButtonClickedACB(btn) {
            props.buttonClickedCB(btn);
        }

        return(
            <CarouselItem key={btn.path} className="text-4xl pt-0 basis-1/2 sm:basis-1/4">
                <PixelButton path={btn.path} btnClickCB={sidebarButtonClickedACB}>
                    {btn.type}
                </PixelButton>
            </CarouselItem>
        );
    }

    return (
        <div className="bg-[var(--theme-color)] flex flex-col items-center border-[10px] border-y-0 border-black w-[100%] sm:border-y-[10px] sm:border-r-0 sm:px-[30px] sm:w-[300px] sm:h-[100%] sm:pb-[30px]">
            
            <div className="text-[40px] sm:text-[60px]  sm:-mt-3">{props.name}</div>
            
            <div className="">
                <Carousel className="w-full flex flex:row items-center sm:flex-col gap-5 sm:gap-1" style={{imageRendering:"pixelated"}} orientation="vertical" opts={{ align: "start", }}>
                    <div>
                        <CarouselPrevious 
                            className="relative top-0 rotate-270"
                            prevImg="../../public/assets/gfxfolder/arrow.png"
                            prevImgDisabled="../../public/assets/gfxfolder/arrowPressed.png">
                        </CarouselPrevious>
                    </div>
                    <CarouselContent className="-mt-[5px] h-50 sm:h-[430px] sm:gap-[0px]">
                        {[...props.sidebarButtons]?.map(renderSidebarsCB)}
                    </CarouselContent>
                    <div>
                        <CarouselNext 
                            className="relative top-0"
                            nextImg="../../public/assets/gfxfolder/arrow.png"
                            nextImgDisabled="../../public/assets/gfxfolder/arrowPressed.png">
                        </CarouselNext>
                    </div>
                </Carousel>
            </div>

        </div>
    );
}

export { SidebarView } 