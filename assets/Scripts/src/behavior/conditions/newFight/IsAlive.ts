import Condition from "../../core/Condition";
import { BaseNodeData } from "../../interf";
import { SUCCESS, FAILURE } from "../../constants";

 
export default class IsAlive extends Condition{
    constructor () {
        let data:BaseNodeData = {
            name: "IsAlive"
        };
        super(data);
    }

    tick (tick) {
        let npc = tick.target.npc;
        if(npc.alive){
            return SUCCESS;
        } else {
            console.log(`${npc.name} 死了不能进攻`);
            return FAILURE;
        }
    }
}