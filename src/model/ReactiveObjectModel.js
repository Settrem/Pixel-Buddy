import { observable, configure, reaction, $mobx } from "mobx";
import { appleModel } from "./AppleModel";
import { basketModel } from "./BasketModel";

export const ReactiveAppleModel = observable(appleModel);
export const ReactiveBasketModel = observable(basketModel);

