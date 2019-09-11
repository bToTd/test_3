import Condition from "../core/Condition";
import { BaseNodeData } from "../interf";
import { FAILURE, SUCCESS } from "../constants";


export default class isBrokenFoot extends Condition{
    constructor () {
        let data:BaseNodeData = {
            name: 'isBrokenFoot'
        };
        super(data);
    }

    tick (tick) {
        if(tick.target.foot){
            console.log("脚断了");
            return SUCCESS;
        } else {
            console.log("脚没断, 走路上学")
            return FAILURE;
        }
    }
}