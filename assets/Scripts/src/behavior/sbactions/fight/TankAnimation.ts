import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS } from "../../constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TankAnimation extends Action{
    constructor () {
        let data:BaseNodeData = {
            name: "TankAnimation"
        };
        super(data);
    }

    tick(tick){
         // c = "状态码_发出方方向_发出方坑位_怒气值"
        // -- 如果没有暴击则没有暴击值
        // f = "目标方位_目标坑位_对目标造成的伤害_目标受击获得怒气值_是否暴击"
        let report:any = tick.target.report;
        let cArr = report.c.split('_');
        let fArr = report.f.split('_');

        console.log(`播放攻击动画：${cArr[1]} 方的 ${cArr[2]} 号坦克攻击了 ${fArr[0]} 方的 ${fArr[1]} 号坦克。`);
        return SUCCESS;
    }
}