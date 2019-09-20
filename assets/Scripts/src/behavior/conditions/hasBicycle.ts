import Condition from "../core/Condition";
import { SUCCESS, FAILURE } from "../constants";
import { BaseNodeData } from "../interf";

 
export default class hasBicycle extends Condition {
    constructor () {
        let data:BaseNodeData = {
            name: 'hasBicycle'
        }
        super(data);
    }

    tick (tick) {
        if(tick.target.bicycle){
            console.log("有车一族");
            return SUCCESS;
        } else {
            console.log("没有自行车")
            return FAILURE;
        }
    }
}