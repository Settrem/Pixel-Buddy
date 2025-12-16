
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

            if (this.localTime) {
                //parts.push(`🕒 It's ${this.localTime}`);
            }

            if (this.temp) {
                parts.push(`🌡️ ${Math.round(this.temp)}° out`);
            }

            if (this.rain) {
                parts.push("🌧️ It's raining");
            }

            if (this.snow) {
                parts.push("❄️ It's snowing");
            }

            if (parts.length === 0) {
                return "✨ The weather is being shy right now";
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