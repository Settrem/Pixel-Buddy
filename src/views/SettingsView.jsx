import { InputFormView } from "./InputFormView";
import { PixelButton } from "../components/ui/PixelButton"; 
import { PixelColorButton } from "../components/ui/PixelColorButton";

function SettingsView(props) {

    function sendNewBuddyNameACB(){
        props.sendNewBuddyNameCB();
    }

    function changeColorACB(color){
        console.log(color);
        props.changeColorCB(color);
    }

    return (
        <div className="w-full h-full overflow-scroll" style={{scrollbarWidth: "none", msOverflowStyle: "none", }}>
            <div className="w-[100%] border-[5px] border-black/30 h-[100%] p-[20px] bg-[rgb(84,92,158)] flex flex-col items-center">
                <div className="text-[70px]">Settings</div>
                <div className="w-fll m-0 mx-1 text-[30px] md:text-[40px] lg:text-[50px] flex flex-col align-center items-center">
                    <div>
                        <div className="text-[50px]">PICK A THEME!</div>
                        <div className="flex flex-row gap-10 w-max">
                            {...props.colors.map(colorBar)}
                        </div>
                    </div>
                    <InputFormView
                        form={props.buddyNameForm}
                        sendFormCB = {sendNewBuddyNameACB}
                    />
                </div>
            </div>
        </div>
    );

    function colorBar(colorBox){
       return( 
            <div className="w-[70px] h-[70px] flex align-center" key={colorBox.rgb.join('-')}>
                <PixelColorButton
                    color= {colorBox.rgb}                                                                                                                                                                                   
                    changeColorCB = {changeColorACB}
                />
            </div>
       );
    }
}

export { SettingsView }
