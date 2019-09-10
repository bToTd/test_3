import Action from "../core/Action";
import { BaseNodeData, SUCCESS } from "../constants";


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