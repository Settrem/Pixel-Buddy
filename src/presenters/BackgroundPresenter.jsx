import { BackgroundView } from "../views/BackgroundVIew";
import { observer } from "mobx-react-lite";

const Background = observer(
function BackgroundPresenter(props){
    let background = "";
    let foreground = "";
    const snow = Number(props.interfaceModel.weather.snow);
    const rain = Number(props.interfaceModel.weather.rain);

    if(rain > snow) {
        background = "../../public/assets/rainBackground.png";
        foreground = "../../public/assets/rainTransparent.gif"
    } else if(rain <= snow && snow ) {
        background = "../../public/assets/snowBackground.png";
        foreground = "../../public/assets/snowing.gif"
    } else {
        background = "../../public/assets/sunBackground.png";
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
