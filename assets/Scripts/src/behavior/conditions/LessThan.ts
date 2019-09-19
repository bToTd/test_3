import Condition from "../core/Condition";
import { BaseNodeData } from "../interf";
import { SUCCESS, FAILURE } from "../constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LessThan extends Condition {
    constructor () {
        let data:BaseNodeData = {
            name: 'LessThan'
        };
        super(data);
    }

    tick (tick) {
        if(tick.target.node[this.properties.direction] < this.properties.value){
            return SUCCESS;
        }
        return FAILURE;
    }
}