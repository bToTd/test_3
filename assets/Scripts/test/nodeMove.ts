import { BehaviorTree, Blackboard } from "../src/behavior";
import * as mvTreeData from "../config/mvTree";
import * as GG from "../src/behavior/constants";
import * as sb from "../src/behavior/conditions"

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
export default class nodeMove extends cc.Component {
    private mvTree: any;
    private blackboard: any;

    protected delayTime: number = 0;
    protected lastTime: number = 0;
    protected ticker: number = 0;

    onLoad(){
        console.log(GG);
        console.log(sb);
        this.mvTree = new BehaviorTree();
        this.blackboard = new Blackboard();
        this.mvTree.load(mvTreeData.data, []);
    }

    start () {
        // this.mvTree = new BehaviorTree();
        // this.blackboard = new Blackboard();
        // this.mvTree.load(mvTreeData.data, []);
    }

    update (dt) {
        this.delayTime = this.delayTime + dt;
        let deltaTime = this.delayTime - this.lastTime;
        if (deltaTime >= 0.2) {
            this.ptick(deltaTime);
            this.lastTime = this.delayTime;
        }
    }
    ptick(dt) {

        this.ticker++;
        if (this.ticker % 5 == 0) {
            this.secTick(1.0);
        }

    }

    secTick(dt) {
        this.mvTree.tick({node:this.node},this.blackboard);
    }
}
