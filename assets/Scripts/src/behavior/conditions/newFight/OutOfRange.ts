import Condition from "../../core/Condition";
import { BaseNodeData } from "../../interf";
import { FAILURE, SUCCESS } from "../../constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class OutOfRange extends Condition{
    constructor () {
        let data: BaseNodeData = {
            name: "OutOfRange"
        };
        super(data)
    }

    tick (tick) {
        let npc = tick.target.npc;
        let detaX = npc.x - npc.target.x;
        let detaY = npc.y - npc.target.y;
        let d = detaX * detaX + detaY * detaY;
        let r = npc.range * npc.range;

        if(d > r){
            return FAILURE;
        }
        return SUCCESS;
    }
}