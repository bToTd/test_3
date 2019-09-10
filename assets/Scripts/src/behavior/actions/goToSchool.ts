import Action from "../core/Action";
import { SUCCESS, BaseNodeData } from "../constants";


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