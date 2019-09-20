import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS } from "../../constants";


export default class Faction extends Action{
    constructor () {
        let data:BaseNodeData = {
            name: 'Faction'
        };
        super(data);
    }

    tick (tick) {
        let npc = tick.target.npc;
        let teammates:Array<any> = [];
        // tick.target.enemys = teammates.splice(npc.index, 1);
        // 这个会修改原数据
        for(let i = 0; i < tick.target.team.length; i++){
            if(i === npc.index){
                // 啥都不做
                continue;
            }
            teammates.push(tick.target.team[i]);
        }
        tick.target.enemys = teammates;
        console.log("内讧状态，攻击队友");
        return SUCCESS
    }
}