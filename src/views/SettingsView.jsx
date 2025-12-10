import { InputFormView } from "./InputFormView";
import { PixelColorButton } from "../components/ui/PixelColorButton";
import { PixelButton } from "../components/ui/PixelButton";

function SettingsView(props) {

    const buddyNameForm = [
        {
            type: "text",
            description: "CHANGE BUDDY NAME",
            stateType: props.buddyName,
            setStateType: props.setBuddyName, 
            placeholder: "Type a new buddyName",
            max: 6,
        },
    ];

    function sendNewBuddyNameACB(){
        props.sendNewBuddyNameCB();
    }

    function changeColorACB(color){
        props.changeColorCB(color);
    }

    function logOutACB(){
        props.logOut();
    }

    return (
        <div className="w-full h-full max-h-fill overflow-scroll" style={{scrollbarWidth: "none", msOverflowStyle: "none", }}>
            <div className="w-[100%] border-[5px] border-black/30 h-max p-[20px] pb-[40px] bg-[var(--theme-color)] flex flex-col items-center">
                <div className="text-[70px]">Settings</div>
                <div className="w-fll m-0 mx-1 text-[50px] flex flex-col align-center items-center gap-5">
                    <div className="flex flex-col items-center">
                        <div className="">LOG OUT ?</div>
                        <div className="w-max flex items-center">
                            <PixelButton btnClickCB={logOutACB}><div className="text-[40px] w-fill h-10 flex flex-row align-center items-center"><p className="w-full">LOG OUT</p></div></PixelButton>
                        </div>
                    </div>
                    <div className="w-fill flex items-center flex-col">
                        <div className=" ">PICK A THEME!</div>
                        <div className=" w-full align-center gap-10 flex flex-row flex-wrap">
                            {...props.colors.map(colorBar)}
                        </div>
                    </div>
                    <InputFormView
                        form={buddyNameForm}
                        sendFormCB = {sendNewBuddyNameACB}
                    />
                </div>
            </div>
        </div>
    );

    function colorBar(colorBox){
       return( 
            <span className="w-[70px] h-[70px] flex align-center" key={colorBox.rgb.join('-')}>
                <PixelColorButton
                    color= {colorBox.rgb}                                                                                                                                                                                   
                    changeColorCB = {changeColorACB}
                />
            </span>
       );
    }
}

export { SettingsView }
