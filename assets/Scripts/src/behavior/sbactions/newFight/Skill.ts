import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS } from "../../constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Skill extends Action {
    constructor () {
        let data:BaseNodeData = {
            name: "Skill"
        };
        super(data);
    }

    tick(tick){
        // 使用技能
        let npc = tick.target.npc;
        npc.energy = 0;
        console.log(`${npc.name} 使用技能,怒气值清零`);
        return SUCCESS;
    }
}