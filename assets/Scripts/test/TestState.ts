import { SnakeState, STATE } from "../src/state/SnakeState";
import SnakeMoveUp from "../src/state/SnakeMoveUp";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestState extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    private state:SnakeState;

    onLoad () {
        this.state = new SnakeMoveUp();
    }

    start () {

    }

    up(){
        this.state.handleInput(this, STATE.UP);
    }
    down(){
        this.state.handleInput(this, STATE.DOWN);
    }
    right(){
        this.state.handleInput(this, STATE.RIGHT);
    }
    left(){
        this.state.handleInput(this, STATE.LEFT);
    }
    stop(){
        this.state.handleInput(this, STATE.STOP)
    }

    update (dt) {
        this.node.x = this.node.x + this.state.getSpeed().xv;
        this.node.y = this.node.y + this.state.getSpeed().yv;
    }
}
