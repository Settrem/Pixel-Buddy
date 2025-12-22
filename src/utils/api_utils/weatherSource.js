import { fetchWeatherApi } from "openmeteo";
import { useEffect, useState } from "react";
const BASE_URL = "https://api.open-meteo.com/v1/forecast"; //These are filters pls, we do not actually want nsfw jokes

async function getUserPosition() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			(pos) => resolve(pos.coords),
			(err) => reject(err)
		);
	});
}

async function fetchWeatherData(latitude, longitude) {
	const params = {
		latitude,
		longitude,
		current: ["temperature_2m", "rain", "snowfall"],
		timezone: "auto",
		forecast_days: 1,
	};

	const responses = await fetchWeatherApi(BASE_URL, params);
	return responses[0]; // model 0
}

function transformWeatherResponse(response) {
	const current = response.current();
	const utcOffsetSeconds = response.utcOffsetSeconds();

    const currentTime = Number(current.time());
	const offset = Number(utcOffsetSeconds);

	return {
		location: {
			latitude: response.latitude(),
			longitude: response.longitude(),
			elevation: response.elevation(),
			timezone: response.timezone(),
			abbreviation: response.timezoneAbbreviation(),
		},
		current: {
			time: new Date((currentTime + offset) * 1000),
			temperature_2m: current.variables(0)?.value(),
			rain: current.variables(1)?.value(),
			snowfall: current.variables(2)?.value(),
		},
	};
}

export function useDynamicWeather() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function run() {
			try {
				setLoading(true);

				const pos = await getUserPosition();
				const rawWeather = await fetchWeatherData(pos.latitude, pos.longitude);
				const weatherData = transformWeatherResponse(rawWeather);

				setData(weatherData);
			} catch (err) {
                console.error("Weather error:", err);
				setError(err);
			} finally {
				setLoading(false);
			}
		}

		run();
	}, []);

	return { data, loading, error };
}