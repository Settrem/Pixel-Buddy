import { PixelTextBox } from "../components/ui/PixelTextBox";

function BottombarView(props){

  return (
    <div className="bg-[var(--theme-color)] flex flex-row items-center justify-center border-[10px] border-t-0 border-black w-[100%] p-[20px] h-[280px] sm:p-[30px] sm:h-[339px] sm:h-fill">
        <PixelTextBox>
            {props.children}
        </PixelTextBox>
    </div>
  );

}

export { BottombarView }