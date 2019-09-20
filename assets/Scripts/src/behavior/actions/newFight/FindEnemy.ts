import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS, FAILURE } from "../../constants";

 
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
        npc.target = null;
        if(enemys[_index].alive){
            npc.target = enemys[_index];
            return SUCCESS;
        } else if (enemys[_index + 3] && enemys[_index + 3].alive) {
            npc.target = enemys[_index + 3];
            return SUCCESS;
        } else {
            for(let i = 0; i < enemys.length; i++){
                if(enemys[i].alive){
                    if(!npc.target){
                        npc.target = enemys[i];
                    } else {
                        npc.target = npc.target.tag < enemys[i].tag ? npc.target : enemys[i];
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