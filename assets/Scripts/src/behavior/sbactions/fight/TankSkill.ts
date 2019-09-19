import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS } from "../../constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TankSkill extends Action{
    constructor () {
        let data:BaseNodeData = {
            name: "TankSkill"
        };
        super(data);
    }

    tick(tick){
         // c = "状态码_发出方方向_发出方坑位_怒气值
         let report:any = tick.target.report;
         let cArr = report.c.split('_');

         console.log(`释放技能：${cArr[1]} 方的 ${cArr[2]} 号坦克使用了技能`);
         console.log(report.s);
         return SUCCESS;
    }
}