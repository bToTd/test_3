import Condition from "../../core/Condition";
import { BaseNodeData } from "../../interf";
import { SUCCESS, FAILURE } from "../../constants";

 
export default class IsCrit extends Condition {
    constructor () {
        let data: BaseNodeData = {
            name: "IsCrit"
        };
        super(data);
    }

    tick (tick) {
        let currentTank = tick.target.currentTank;
        let targetTank = tick.target.targetTank;
        
        let crit = currentTank.numberValue._inicritate;
        let resistCrit = 0;

        if (targetTank._pMyType == "tank") {
            resistCrit = targetTank.numberValue._toughness;
        }
        // @ts-ignore
        let a = parseInt(Math.random() * 100) + 1;
        let max = Math.max(0, crit - resistCrit) * 100;
        if( a >= 1 && a <= max) {
            return SUCCESS;
        }

        return FAILURE;
    }
}