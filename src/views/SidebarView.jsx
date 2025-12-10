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
            <CarouselItem key={btn.path} className="pt-1 basis-1/2 sm:basis-1/4">
                <PixelButton path={btn.path} btnClickCB={sidebarButtonClickedACB}>
                    {btn.type}
                </PixelButton>
            </CarouselItem>
        );
    }

    return (
        <div className="bg-[rgb(84,92,158)] flex flex-col items-center border-[10px] border-y-0 border-black w-[100%] sm:border-y-[10px] sm:border-r-0 sm:px-[30px] sm:w-[300px] sm:h-[100%]">
            
            <div className="text-[40px] sm:text-[60px]  sm:-mt-3">{props.name}</div>
            
            <div className="">
                <Carousel className="w-full flex flex:row items-center sm:flex-col gap-5 sm:gap-4" orientation="vertical" opts={{ align: "start", }}>
                    <div>
                        <CarouselPrevious className="relative top-0">
                        </CarouselPrevious>
                    </div>
                    <CarouselContent className="-mt-1 h-50 sm:h-[430px] sm:gap-[0px]">
                        {[...props.sidebarButtons]?.map(renderSidebarsCB)}
                    </CarouselContent>
                    <div>
                        <CarouselNext className="relative top-0 -mt-[8px]">
                        </CarouselNext>
                    </div>
                </Carousel>
            </div>

        </div>
    );
}

export { SidebarView } 