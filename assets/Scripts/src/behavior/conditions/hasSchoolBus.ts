import { Condition } from "..";
import { FAILURE, SUCCESS } from "../constants";
import { BaseNodeData } from "../interf";


export default class hasSchoolBus extends Condition{
    constructor () {
        let data:BaseNodeData = {
            name: 'hasSchoolBus'
        };
        super(data);
    }

    tick (tick) {
        if(tick.target.time > this.properties.time){
            console.log("too late and no bus");
            return FAILURE;
        } else {
            console.log("congletulations, bus is coming");
            return SUCCESS;
        }
    }
}