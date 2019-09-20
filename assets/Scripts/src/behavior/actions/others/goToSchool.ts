import Action from "../../core/Action";
import { SUCCESS } from "../../constants";
import { BaseNodeData } from "../../interf";

 
export default class goToSchool extends Action {
    constructor () {
        let data:BaseNodeData = {
            name: "goToSchool"
        };
        super(data);
    }

    tick (tick) {
        console.log(`${tick.target.name} go to school`);
        return SUCCESS;
    }
}