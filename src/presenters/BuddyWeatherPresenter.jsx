import { observer } from "mobx-react-lite";
import { BuddyView } from "../views/BuddyView";
import { Buddy } from "./BuddyPresenter";
import { useEffect } from "react";
import { useDynamicWeather } from "../utils/api_utils/weatherSource";

function BuddyWeather(props) {
  const { data, loading, error } = useDynamicWeather();

  useEffect(() => {
    if (loading) {
      props.interfaceModel.setBoxTextTo("Loading weather…");
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
      props.interfaceModel.setBoxTextTo(text);
    }
  }, [loading, error, data]);

  return <Buddy model={props.model} />;
}

export { BuddyWeather }