import { observable, configure, reaction, $mobx } from "mobx";
import { userModel } from "./UserModel";

export const reactiveUserModel = observable(userModel);

function modelStatsChangedACB(){
    return reactiveUserModel.buddyModel.stats;
}

function updateInteractionTimeACB(){
    return reactiveUserModel.buddyModel.lastTimeInteracted = new Date();
}

reaction(updateInteractionTimeACB, modelStatsChangedACB);


