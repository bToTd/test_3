import Condition from "../../core/Condition";
import { BaseNodeData } from "../../interf";
import { SUCCESS, FAILURE } from "../../constants";

 
export default class FullEnergy extends Condition {
    constructor () {
        let data:BaseNodeData = {
            name: "FullEnergy"
        };
        super(data);
    }

    tick (tick) {
        if(tick.target.npc.energy >= 50){
            return SUCCESS;
        }
        return FAILURE;
    }
}