import { PixelTextBox } from "../components/ui/PixelTextBox";

function BottombarView(props){

  return (
    <div className="bg-[var(--theme-color)] flex flex-row justify-center border-[10px] border-t-0 border-black w-[100%] p-[20px] h-auto sm:p-[30px]">
        <div className = "min-h-[199px] min-w-full">
          <PixelTextBox>
              {props.children}
          </PixelTextBox>
        </div>
    </div>
  );

}

export { BottombarView }