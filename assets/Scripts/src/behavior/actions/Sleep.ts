import Action from "../core/Action";
import { BaseNodeData, SUCCESS } from "../constants";


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