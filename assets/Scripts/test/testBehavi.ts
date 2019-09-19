import { BehaviorTree, Blackboard } from "../src/behavior";
import { data } from "../config/testB3Data";
import * as B3Data from "../config/B3DataGotoSchool";
import * as AwardData from "../config/awardTree";
import * as GOLOBAL from "../src/behavior/constants";
import * as sb from "../src/behavior/sbactions";
import { TankFight } from "../config/Tank/TankB3";
import { Report } from "../config/Tank/TankReport";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

// 模拟坦克的对象
interface Tank {
    name:string,
    index: number,
    tag: number,
    x: number,
    y: number,
    range: number,
    target: Tank,
    energy: number,
    status:string,
}

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

    private isOpen: boolean = false;

    // 播放战报的行为树
    private TankB3: any;

    onLoad () {
        console.log("测试开始");
        console.log(GOLOBAL.COMPOSITE);
        console.log(sb);

        this.gotoschool = new BehaviorTree();
        this.tre = new BehaviorTree();
        this.blackboard = new Blackboard();
        this.awardTree = new BehaviorTree();
        this.tre.load(data,[]);
        this.gotoschool.load(B3Data.tree, []);
        this.awardTree.load(AwardData.data, []);

        // 播放战报的行为树
        this.TankB3 = new BehaviorTree();
        this.TankB3.load(TankFight, []);
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
        console.log(`当前积分为 ${this.award}`);
    }

    tankFightBtn () {
        console.log("=================战报开始播放================");
        let d = Report.d;
        for(let key in d){
            let re:Array<any> = d[key];
            for(let index  = 0; index<re.length; index++){
                let obj = {
                    report: re[index]
                }
                this.TankB3.tick(obj,this.blackboard);
            }
        }
    }
    



    // update (dt) {}
}
