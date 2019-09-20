import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS } from "../../constants";

 
export default class NpcMove extends Action {
    constructor () {
        let data:BaseNodeData = {
            name: "NpcMove"
        };
        super(data);
    }

    tick (tick) {
        let npc = tick.target.npc;
        // 应该移动的距离
        let mv:number = 0;
        // y 坐标的差值
        let detaY:number = npc.y - npc.target.y;
        // 射程
        let r: number = npc.range;
        // 计算移动距离
        mv = Math.abs(npc.x - npc.target.x) - parseInt(Math.sqrt(r * r - detaY * detaY).toString());
        console.log(`${npc.name} move ${mv}`);
        // npc.x += mv;
        return SUCCESS;
    }
}