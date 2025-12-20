import { observable, configure, reaction, $mobx } from "mobx";
import { userModel } from "./UserModel";
import { connectToPersistence } from "../persistence/firestoreModel";

export const reactiveUserModel = observable(userModel);
connectToPersistence(reactiveUserModel, reaction);

function statChangeACB(){
    return [
        reactiveUserModel.buddyModel.stats.hunger,
        reactiveUserModel.buddyModel.stats.happiness,
        reactiveUserModel.buddyModel.stats.energy,
    ];
}

function limitStatValueACB(){
    const stats = reactiveUserModel.buddyModel.stats;

    if (stats.hunger > 100) {
        stats.hunger = 100;
    }
    if (stats.hunger < 0) {
        stats.hunger = 0;
    }

    if (stats.happiness > 100) {
        stats.happiness = 100;
    }
    if (stats.happiness < 0) {
        stats.happiness = 0;
    }

    if (stats.energy > 100) {
        stats.energy = 100;
    }
    if (stats.energy < 0) {
        stats.energy = 0;
    }
}


function colorChangeACB(){
    return reactiveUserModel.uiTheme;
}

function updateThemeColorACB(){
    const [r, g, b] = reactiveUserModel.uiTheme;
    document.documentElement.style.setProperty(
        '--theme-color',
        `rgb(${r}, ${g}, ${b})`
    )
}

reaction(statChangeACB, limitStatValueACB)
reaction(colorChangeACB, updateThemeColorACB)

window.myModel= reactiveUserModel;

