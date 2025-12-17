import { observer } from "mobx-react-lite";
import { BuddyView } from "../views/BuddyView";
import { Buddy } from "./BuddyPresenter";
import { useEffect } from "react";
import { useDynamicWeather } from "../utils/api_utils/weatherSource";
import { Background } from "./BackgroundPresenter";
import { StatusBarPresenter } from "./StatusBarPresenter"; 

function BuddyWeather(props) {
  const { data, loading, error } = useDynamicWeather();

  useEffect(() => {
    if (loading) {
      props.interfaceModel.setBoxTextTo("Checking the weather…");
      return;
    }

    if (error) {
      props.interfaceModel.setBoxTextTo("PLS LET US KNOW YOUR LOCATION.");
      return;
    }

    if (data) {
      const text = `
        Weather for your location:
        Temperature: ${data.current.temperature_2m}°C
        Rain: ${data.current.rain} mm
        Snowfall: ${data.current.snowfall} cm
        Local time: ${data.current.time.toString()}
      `;
      props.interfaceModel.weather.temp = data.current.temperature_2m;
      props.interfaceModel.weather.rain = data.current.rain;
      props.interfaceModel.weather.snow = data.current.snowfall;
      props.interfaceModel.weather.localTime = data.current.time.toString();
      props.interfaceModel.displayWeather();
    }
  }, [loading, error, data]);

  return (
    <div className="h-full w-full">
      <StatusBarPresenter userModel = {props.model}/>
      <Buddy model={props.model} />
    </div>
  );
}

export { BuddyWeather }