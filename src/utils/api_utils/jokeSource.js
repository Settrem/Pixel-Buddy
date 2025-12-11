const BASE_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"; //These are filters pls, we do not actually want nsfw jokes

function gotResponseACB(response) {
    if (!response.ok) throw new Error("No response");
    return response.json();
}

function returnDataACB(data) {
    console.log(data.joke);
    return data.joke || data.results;
}

export function generateJoke() {
    return fetch(BASE_URL)
        .then(gotResponseACB)
        .then(returnDataACB);
}