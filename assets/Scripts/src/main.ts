// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import { BehaviorTree, Blackboard } from "../src/behavior";
import { data } from "../config/testB3Data";
import * as B3Data from "../config/B3DataGotoSchool";
import * as AwardData from "../config/awardTree";
import * as GOLOBAL from "../src/behavior/constants";
import { TankFight } from "../config/Tank/TankB3";
import { Report } from "../config/Tank/TankReport";

const {ccclass, property, executionOrder} = cc._decorator;

@ccclass
// @executionOrder(-1)
export default class Main extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log(GOLOBAL);
        new BehaviorTree();
    }

    start () {
        new BehaviorTree();
    }

    // update (dt) {}
}
