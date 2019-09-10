import {StateManager, State} from '../src/StateManager';
import {data} from '../config/newState'

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestStM extends cc.Component implements State {
    private SM_1 = new StateManager();
    public _state:string = data.state["-2"];
    onLoad () {
        console.log(data);
        this.SM_1.loadStateFromJosn(data);
        this.SM_1.registeredActionForState(data.state["-2"], function(){console.log("running")});
        this.SM_1.registeredActionForState(data.state["-3"], function(){console.log("wait")});
        this.SM_1.registeredActionForState(data.state["-4"], function(){console.log("stop")});
    }

    start () {

    }
};