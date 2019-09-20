import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS } from "../../constants";


export default class Detoxification extends Action {
    constructor () {
        let data:BaseNodeData = {
            name: "Detoxification"
        };
        super(data);
    }

    tick (tick) {
        let npc = tick.target.npc;
        npc.status = '';
        console.log(`${npc.name} 负面状态解除`);
        return SUCCESS;
    }
}