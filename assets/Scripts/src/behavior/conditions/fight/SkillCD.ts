import Condition from "../../core/Condition";
import { BaseNodeData } from "../../interf";
import { SUCCESS, FAILURE } from "../../constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SkillCD extends Condition{
    constructor () {
        let data:BaseNodeData = {
            name: "SkillCD"
        };
        super(data);
    }

    tick(tick){
        let npc = tick.target.npc;
        let skill = npc[this.properties.name];
        let currentTime = new Date().getTime();
        if(skill.lastTime == null || skill.lastTime == undefined){
            skill.lastTime = 0;
        }
        let _detaTime = currentTime - skill.lastTime;
        if(_detaTime > this.properties.CD_time){
            // cd 时间到了，可以释放技能
            return SUCCESS;
        }
        return FAILURE;
    }
}