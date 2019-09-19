import Condition from "../../core/Condition";
import { BaseNodeData } from "../../interf";
import { FAILURE, SUCCESS } from "../../constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class IsAllowAttack extends Condition{
    constructor () {
        let data:BaseNodeData = {
            name: "IsAllowAttack"
        };
        super(data);
    }

    tick (tick) {
        let currentTank = tick.target.currentTank;
        let timeStr = "nnn"
        if ( currentTank._preFires[timeStr] != null ) {
            if ( currentTank._preFires[timeStr].allow == false ) {
                currentTank._preFires[timeStr] = null;
                console.log(`攻击被打断`);
                return FAILURE;
            }
        }

        return SUCCESS;
    }
}