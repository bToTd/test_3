import Condition from "../../core/Condition";
import { BaseNodeData } from "../../interf";
import { SUCCESS, FAILURE } from "../../constants";

 
export default class StatuCode extends Condition{
    constructor(){
        let data:BaseNodeData = {
            name: "StatuCode"
        };
        super(data);
    }

    tick(tick){
        let report = tick.target.report;
        let _status:string = this.properties.status;
        if(report.c.startsWith(_status)){
            return SUCCESS;
        }
        return FAILURE;
    }
}