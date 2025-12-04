const BASE_URL = "https://opentdb.com/api_category.php";

export function getCategories() {
    console.log("1. [Source] Fetching started");
    return fetch(BASE_URL)
        .then(gotResponseACB)
        .then(returnDataACB);
}

function gotResponseACB(response) {
    if (!response.ok) throw new Error("No response");
    return response.json();
}

function returnDataACB(data) {
    console.log("2. [Source] Raw API data received:", data);
    return data.trivia_categories; 
}