import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS } from "../../constants";

 
export default class TankMove extends Action{
    constructor () {
        let data:BaseNodeData = {
            name: "TankMove"
        };
        super(data);
    }

    tick(tick){
        // c = "状态码_发出方方向_发出方坑位_怒气值
        let report:any = tick.target.report;
        let cArr = report.c.split('_');

        console.log(`移动开始：${cArr[1]} 方的 ${cArr[2]} 号坦克移动`)
        return SUCCESS;
    }
}