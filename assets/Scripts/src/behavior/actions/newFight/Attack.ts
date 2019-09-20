import Action from "../../core/Action";
import { BaseNodeData } from "../../interf";
import { SUCCESS } from "../../constants";

 
export default class Attack extends Action {
    constructor () {
        let data:BaseNodeData = {
            name: "Attack"
        };
        super(data);
    }

    tick(tick){
        let npc = tick.target.npc;
        npc.target.HP -=5;
        if(npc.target.HP <= 0){
            npc.target.alive = false;
        }
        console.log(`${npc.name} attack ${npc.target.name}, ${npc.target.name} HP: ${npc.target.HP}`);
        npc.energy += 5;
        npc.target.energy += 10;
        return SUCCESS;
    }
}