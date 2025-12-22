const BASE_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"; //These are filters pls, we do not actually want nsfw jokes
const MAX_LENGTH = 120;
const MAX_RETRIES = 5;

function gotResponseACB(response) {
    if (!response.ok) throw new Error("No response");
    return response.json();
}

function returnDataACB(data, attempt) {
    if(data.joke.length <= MAX_LENGTH){
        console.log(data.joke);
        return data.joke || data.results;
    }

    if (attempt >= MAX_RETRIES) {
        return "Sorry i couldn't coome up with any good jokes, could you ask me again :)";
    }
    
    return generateJoke(attempt + 1); 
}

export function generateJoke(attempt = 0) {
    return fetch(BASE_URL)
        .then(gotResponseACB)
        .then(data => returnDataACB(data, attempt));
}