import Action from "../core/Action";
import { SUCCESS } from "../constants";
import { BaseNodeData } from "../interf";

const {ccclass, property} = cc._decorator;

@ccclass
export default class goToSchool extends Action {
    constructor () {
        let data:BaseNodeData = {
            name: "goToSchool"
        };
        super(data);
    }

    tick (tick) {
        console.log(`${tick.target.name} go to school`);
        return SUCCESS;
    }
}