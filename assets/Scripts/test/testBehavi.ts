import { BehaviorTree, Blackboard } from "../src/behavior";
import { data } from "../config/testB3Data";
import * as B3Data from "../config/B3DataGotoSchool";
import * as AwardData from "../config/awardTree";

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
export default class TestBehavi extends cc.Component {

    // LIFE-CYCLE CALLBACKS:
    private gotoschool:any;
    private blackboard:any;
    private tre :any;
    private awardTree:any;
    public award:number = 0;
    public level:number = 0;

    onLoad () {
        console.log("测试开始");
        this.gotoschool = new BehaviorTree();
        this.tre = new BehaviorTree();
        this.blackboard = new Blackboard();
        this.awardTree = new BehaviorTree();
        this.tre.load(data,[]);
        this.gotoschool.load(B3Data.tree, []);
        this.awardTree.load(AwardData.data, []);
    }

    start () {

    }

    Tom () {
        let obj = {
            name: 'Tom',
            time: 8,
            foot: false
        }
        this.gotoschool.tick(obj, this.blackboard);
        // gotoschool.tick({name: 'sb1', time: 6, foot: false},blackboard);
    }

    awardBtn () {
        let obj = {ReceivingCondition: this.award, level: this.level};
        this.awardTree.tick(obj,this.blackboard);
        this.level = obj.level;
        this.award = obj.ReceivingCondition;
    }

    addAward () {
        this.award += 5;
    }
    



    // update (dt) {}
}
