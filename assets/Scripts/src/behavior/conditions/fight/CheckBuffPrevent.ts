import Condition from "../../core/Condition";
import { BaseNodeData } from "../../interf";
import { SUCCESS, FAILURE } from "../../constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CheckBuffPrevent extends Condition {
    constructor () {
        let data: BaseNodeData = {
            name: "CheckBuffPrevent"
        };
        super(data);
    }

    tick (tick) {
        let currentTank = tick.target.currentTank;
        if (currentTank._buffNums[1] > 0){
            // 晕眩
            return SUCCESS;
        }

        if (currentTank._buffNums[4] > 0) {
            // 怯战

            return SUCCESS;
        }

        if (currentTank._buffNums[23] > 0) {
            // 晕眩（23）
            return SUCCESS
        }

        return FAILURE;
    }
}