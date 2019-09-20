import { BehaviorTree, Blackboard } from "../src/behavior";
import { data } from "../config/testB3Data";
import * as B3Data from "../config/B3DataGotoSchool";
import * as AwardData from "../config/awardTree";
import * as GOLOBAL from "../src/behavior/constants";
import { TankFight } from "../config/Tank/TankB3";
import { Report } from "../config/Tank/TankReport";
import { fight } from "../config/Tank/TankFightcfg";


import * as sb from "../src/behavior/actions"

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
    target?: Tank,
    energy: number,
    status:string,
    HP: number,
    alive:boolean,
}
const MAX = 6;
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

    // 战斗行为树
    private fightTree: any;
    private delayTime: any = 0;
    private lastTime: any = 0;
    private ticker: any  = 0;

    private tanks_1:Array<Tank> = [];
    private tanks_2:Array<Tank> = [];

    private attackCount = 1;
    private bruck: number = 0;
    private red: number = 0;

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

        // 初始化战斗行为树
        this.fightTree = new BehaviorTree();
        this.fightTree.load(fight, []);
        this.initTanks();
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

    FightBtn(){
        this.isOpen = !this.isOpen;
    }

    initTanks(){
        for(let index = 0; index < MAX; index++){
            let t:Tank = {
                'name' : '蓝色_'+index.toString(),
                'HP': 100,
                'index' : index,
                'tag' : index + 1,
                'energy' : 0,
                'range' : 700,
                'status' : "alive",
                'y' : (index % 3) * 100,
                'x' : index < 3 ? 200 : 0,
                'alive': true,
            };
            this.tanks_1.push(t);
        }


        for(let index = 0; index < MAX; index++){
            let t:Tank = {
                'name' : '红色_' + index.toString() + '_',
                'HP' : 100,
                'index' : index,
                'tag' : index + 1,
                'energy' : 0,
                'range' : 700,
                'status' : "alive",
                'y' : (index % 3) * 100,
                'x' : index < 3 ? 600 : 800,
                'alive' : true,
            };
            this.tanks_2.push(t);
        }
    }

    refreshTanks(){
        this.tanks_1 = [];
        this.tanks_2 = [];
        this.attackCount = 1;
        this.initTanks();
    }
    
    Fighting(){
        if(this.isAllDeath(this.tanks_1)){
            console.log(`总共攻击了 ${this.attackCount} 次`);
            console.log("游戏结束，红赢了");
            this.refreshTanks();
            this.isOpen = false;
            return;
        }

        if(this.isAllDeath(this.tanks_2)){
            console.log(`总共攻击了 ${this.attackCount} 次`);
            console.log("游戏结束，蓝方赢了");
            this.refreshTanks();
            this.isOpen = false;
            return;
        }
        if(this.attackCount % 2 === 1){
            for(let index = 0; index < MAX; index++){
                if(this.tanks_1[this.bruck % MAX].alive){
                    break;
                }
                this.bruck++;
            }
            let oo = {
                npc: this.tanks_1[this.bruck % MAX],
                enemys: this.tanks_2,
                team:this.tanks_1
            }
            this.fightTree.tick(oo, this.blackboard);
            this.bruck++;
        } else {
            for(let index = 0; index < MAX; index++){
                if(this.tanks_2[this.red % MAX].alive){
                    break;
                }
                this.red++;
            }
            let oo2 = {
                npc: this.tanks_2[this.red % MAX],
                enemys: this.tanks_1,
                team: this.tanks_2
            }
            this.fightTree.tick(oo2, this.blackboard);
            this.red ++;
        }
        this.attackCount++;
    }

    isAllDeath(arr:Array<any>){
        for(let index = 0; index < arr.length; index++){
            if(arr[index].alive){
                return false;
            }
        }
        return true;
    }



    update (dt) {
        this.delayTime = this.delayTime + dt;
        let deltaTime = this.delayTime - this.lastTime;
        if (deltaTime >= 0.2) {
            this.ptick(deltaTime);
            this.lastTime = this.delayTime;
        }

        if(this.isOpen){
            this.Fighting();
        }
    }
    ptick(dt) {

        this.ticker++;
        if (this.ticker % 5 == 0) {
            this.secTick(1.0);
        }

    }

    secTick(dt) {
       
    }
}
