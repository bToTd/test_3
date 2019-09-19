import Action from "../core/Action";
import { SUCCESS } from "../constants";
import { BaseNodeData } from "../interf";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Boarding extends Action {
    constructor () {
        let data:BaseNodeData = {
            name: "Boarding"
        }
        super(data);
    }
    tick (tick) {
        console.log(`${tick.target.name} is on school bus`);
        return SUCCESS;
    }
}