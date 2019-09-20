import Condition from "../../core/Condition";
import { BaseNodeData } from "../../interf";
import { SUCCESS, FAILURE } from "../../constants";

 
export default class TankStatus extends Condition{
    constructor () {
        let data:BaseNodeData = {
            name: "TankStatus"
        };
        super(data);
    }

    tick (tick) {
        let npc = tick.target.npc;
        if(npc.status === this.properties.status){
            return SUCCESS;
        } else {
            return FAILURE;
        }
    }
}