"use strict";
cc._RF.push(module, '86987alkG9PT6C+cs0hWBig', 'testBehavi');
// Scripts/test/testBehavi.ts

Object.defineProperty(exports, "__esModule", { value: true });
var behavior_1 = require("../src/behavior");
var testB3Data_1 = require("../config/testB3Data");
var B3Data = require("../config/B3DataGotoSchool");
var AwardData = require("../config/awardTree");
var GOLOBAL = require("../src/behavior/constants");
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TestBehavi = /** @class */ (function (_super) {
    __extends(TestBehavi, _super);
    function TestBehavi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.award = 0;
        _this.level = 0;
        return _this;
        // update (dt) {}
    }
    TestBehavi.prototype.onLoad = function () {
        console.log("测试开始");
        console.log(GOLOBAL.COMPOSITE);
        this.gotoschool = new behavior_1.BehaviorTree();
        this.tre = new behavior_1.BehaviorTree();
        this.blackboard = new behavior_1.Blackboard();
        this.awardTree = new behavior_1.BehaviorTree();
        this.tre.load(testB3Data_1.data, []);
        this.gotoschool.load(B3Data.tree, []);
        this.awardTree.load(AwardData.data, []);
    };
    TestBehavi.prototype.start = function () {
    };
    TestBehavi.prototype.Tom = function () {
        var obj = {
            name: 'Tom',
            time: 8,
            foot: false
        };
        this.gotoschool.tick(obj, this.blackboard);
        // gotoschool.tick({name: 'sb1', time: 6, foot: false},blackboard);
    };
    TestBehavi.prototype.awardBtn = function () {
        var obj = { ReceivingCondition: this.award, level: this.level };
        this.awardTree.tick(obj, this.blackboard);
        this.level = obj.level;
        this.award = obj.ReceivingCondition;
    };
    TestBehavi.prototype.addAward = function () {
        this.award += 5;
        console.log("\u5F53\u524D\u79EF\u5206\u4E3A " + this.award);
    };
    TestBehavi = __decorate([
        ccclass
    ], TestBehavi);
    return TestBehavi;
}(cc.Component));
exports.default = TestBehavi;

cc._RF.pop();