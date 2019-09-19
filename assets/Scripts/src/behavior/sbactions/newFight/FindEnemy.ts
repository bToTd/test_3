import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS, FAILURE } from "../../constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FindEnemy extends Action{
    constructor () {
        let data:BaseNodeData = {
            name: "FindEnemy"
        };
        super(data);
    }

    tick (tick) {
        let npc = tick.target.npc;
        let enemys = tick.target.enemys;
        let _index = npc.index % 3;
        
        if(enemys[_index].status === "alive"){
            npc.target = enemys[_index];
            return SUCCESS;
        } else if (enemys[_index + 3] === "alive") {
            npc.target = enemys[_index + 3];
            return SUCCESS;
        } else {
            for(let i = 0; i < enemys.length; i++){
                if(enemys[i].status === "alive"){
                    if(!npc.target){
                        npc.target = enemys[i];
                    } else {
                        npc.target = npc.target.tag < enemys[i].tag ? npc.target.tag : enemys[i];
                    }
                }
            }

            if(!npc.target){
                console.error("找不到攻击对象");
                return FAILURE;
            }
            return SUCCESS;
        }
    }
}