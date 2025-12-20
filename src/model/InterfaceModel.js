
export const interfaceModel = {
    TextBox: "Hello",
    textPromiseState: {},
    jokeReloadToken: 0,
    weather: {
        temp: 0,
        rain: 0,
        snow: 0,
        localTime: "",

        weatherToString(){
            let parts = [];

            if (this.temp) {
                parts.push(`It is ${Math.round(this.temp)}° outside`);
            }

            if (this.rain) {
                parts.push(" It's also raining");
            }

            if (this.snow) {
                parts.push(" It's also snowing");
            }

            if (parts.length === 0) {
                return " The weather is being shy right now";
            }

            return parts.join(" · ");
        }
    },

    setBoxTextTo(text) {
        this.TextBox = text;
    },

    displayWeather() {
        this.TextBox = this.weather.weatherToString();
    }
} 