import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS } from "../../constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Attack extends Action {
    constructor () {
        let data:BaseNodeData = {
            name: "Attack"
        };
        super(data);
    }

    tick(tick){
        let npc = tick.target.npc;
        console.log(`${npc.name} attack ${npc.target.name}`);
        npc.energy += 5;
        npc.target.energy += 10;
        return SUCCESS;
    }
}