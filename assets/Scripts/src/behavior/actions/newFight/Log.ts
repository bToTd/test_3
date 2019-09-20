import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS } from "../../constants";


export default class Log extends Action {
    constructor () {
        let data:BaseNodeData = {
            name: 'Log'
        }
        super(data);
    }

    tick (tick) {
        console.error(`${tick.target.npc.name} status is ${tick.target.npc.status} 跳过攻击`);
        return SUCCESS;
    }
}