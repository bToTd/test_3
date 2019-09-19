import Action from "../core/Action";
import { BaseNodeData } from "../interf";
import { SUCCESS } from "../constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NotAward extends Action {
    constructor () {
        let data:BaseNodeData = {
            name: 'NotAward'
        };
        super(data);
    }

    tick (tick){
        console.log(`没有可以领取的奖励`);
        return SUCCESS;
    }
}