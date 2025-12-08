import { observable, configure, reaction, $mobx } from "mobx";
import { interfaceModel } from "./InterfaceModel";

export const reactiveInterfaceModel = observable(interfaceModel);



