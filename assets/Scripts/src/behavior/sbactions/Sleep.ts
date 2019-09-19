import Action from "../core/Action";
import { SUCCESS } from "../constants";
import { BaseNodeData } from "../interf";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Sleep extends Action{
    constructor () {
        let data:BaseNodeData = {
            name: "Sleep"
        }
        super(data);
    }
    tick (tick) {
        console.log(`${tick.target.name} is sleep`);
        return SUCCESS;
    }
}