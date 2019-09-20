import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS } from "../../constants";

 
export default class Skill extends Action {
    constructor () {
        let data:BaseNodeData = {
            name: "Skill"
        };
        super(data);
    }

    tick(tick){
        // 状态编码
        // 1. paralysis 瘫痪状态
        // 2. faction  内讧状态
        // 3. fear  怯战状态
        let _status:Array<string> = ['paralysis','faction','fear','','','','']
        // 使用技能
        let npc = tick.target.npc;
        let i = Math.round(Math.random()*6);
        let s = _status[i];
        if(s === ''){
            npc.target.HP -= 20;
            console.log(`${npc.name} 对 ${npc.target.name} 使用了伤害技能 -20`);
        } else {
            console.log(`${npc.name} 对 ${npc.target.name} 使用了 ${s} 技能`);
        }
        tick.target.npc.target.status = s;
        npc.energy = 0;
       
        if(npc.target.HP <= 0){
            npc.target.alive = false;
        }
        console.log(`${npc.name} 使用技能,怒气值清零`);
        return SUCCESS;
    }
}