import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS } from "../../constants";

 
export default class OtherAction extends Action{
    constructor () {
        let data:BaseNodeData = {
            name: "OtherAction"
        };
        super(data);
    }

    tick(tick){
        console.log("坦克的其他行为动作");
        return SUCCESS;
    }
}