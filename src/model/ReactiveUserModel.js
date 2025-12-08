import { observable, configure, reaction, $mobx } from "mobx";
import { userModel } from "./UserModel";
import { connectToPersistence } from "../persistence/firestoreModel";

export const reactiveUserModel = observable(userModel);
connectToPersistence(reactiveUserModel, reaction);

function modelStatsChangedACB(){
    return [
        reactiveUserModel.buddyModel.stats.hunger,
        reactiveUserModel.buddyModel.stats.happiness,
        reactiveUserModel.buddyModel.stats.energy,
    ];
}

function updateInteractionTimeACB(){
    return reactiveUserModel.buddyModel.lastTimeInteracted = new Date();
}

reaction(modelStatsChangedACB, updateInteractionTimeACB);

window.myModel= reactiveUserModel;

