import { BackgroundView } from "../views/BackgroundVIew";
import { observer } from "mobx-react-lite";

const Background = observer(
function BackgroundPresenter(props){
    let background = "";
    let foreground = "";
    const snow = Number(props.interfaceModel.weather.snow);
    const rain = Number(props.interfaceModel.weather.rain);
    const hour = new Date().getHours();

    if(rain > snow) {
        background = "/assets/rainBackground.png";
        foreground = "/assets/rainTransparent.gif"
    } else if(rain <= snow && snow ) {
        background = "/assets/snowBackground.png";
        foreground = "/assets/snowing.gif"
    } else if(hour > 19 || hour < 6){
        background = "/assets/nightBackground.png"; 
    } else {
        background = "/assets/sunBackground.png";
    } 

    return(
        <div className="absolute inset-0 z-0">
            <BackgroundView
                background = {background}
                foreground = {foreground}
            />
        </div>
    );
});

export { Background }
