const BASE_URL = "https://opentdb.com/";
const CATEGORY_URL = "api_category.php";
const CATEGORY_CHOICE = "api.php?amount=10&category=";

export function getCategories() {
    let url = BASE_URL + CATEGORY_URL;

    return fetch(url)
        .then(gotResponseACB)
        .then(returnDataACB);
}

function gotResponseACB(response) {
    if (!response.ok) throw new Error("No response");
    return response.json();
}

function returnDataACB(data) {
    return data.trivia_categories || data.results;
}

export function chosenCategory(category) {
    let url = BASE_URL + CATEGORY_CHOICE + category;

    return fetch(url)
        .then(gotResponseACB)
        .then(returnDataACB);
}