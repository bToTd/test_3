import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS } from "../../constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TankMove extends Action {
    constructor () {
        let data:BaseNodeData = {
            name: "TankMove"
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
        mv = parseInt(Math.sqrt(r * r + detaY * detaY).toString());
        console.log(`${npc.name} move ${mv}`);
        npc.x += mv;
        return SUCCESS;
    }
}