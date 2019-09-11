import Action from "../core/Action";
import { SUCCESS } from "../constants";
import { BaseNodeData } from "../interf";


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