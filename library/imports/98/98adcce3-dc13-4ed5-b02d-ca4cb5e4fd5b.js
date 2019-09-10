"use strict";
cc._RF.push(module, '98adczj3BNO1bAtyky15P1b', 'TestState');
// Scripts/test/TestState.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SnakeState_1 = require("../src/state/SnakeState");
var SnakeMoveUp_1 = require("../src/state/SnakeMoveUp");
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
var TestState = /** @class */ (function (_super) {
    __extends(TestState, _super);
    function TestState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestState.prototype.onLoad = function () {
        this.state = new SnakeMoveUp_1.default();
    };
    TestState.prototype.start = function () {
    };
    TestState.prototype.up = function () {
        this.state.handleInput(this, SnakeState_1.STATE.UP);
    };
    TestState.prototype.down = function () {
        this.state.handleInput(this, SnakeState_1.STATE.DOWN);
    };
    TestState.prototype.right = function () {
        this.state.handleInput(this, SnakeState_1.STATE.RIGHT);
    };
    TestState.prototype.left = function () {
        this.state.handleInput(this, SnakeState_1.STATE.LEFT);
    };
    TestState.prototype.stop = function () {
        this.state.handleInput(this, SnakeState_1.STATE.STOP);
    };
    TestState.prototype.update = function (dt) {
        this.node.x = this.node.x + this.state.getSpeed().xv;
        this.node.y = this.node.y + this.state.getSpeed().yv;
    };
    TestState = __decorate([
        ccclass
    ], TestState);
    return TestState;
}(cc.Component));
exports.default = TestState;

cc._RF.pop();