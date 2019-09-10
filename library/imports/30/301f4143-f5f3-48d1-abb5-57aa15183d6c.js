"use strict";
cc._RF.push(module, '301f4FD9fNI0au1V6oVGD1s', 'StateManager');
// Scripts/src/StateManager.ts

/**
 *@description: 状态机的配置表，检查对象的状态转换
 *@author: hwc bToTd
 *@date: 2019-08-27 15:51:02
 *@version
 */
Object.defineProperty(exports, "__esModule", { value: true });
var StateManager = /** @class */ (function () {
    function StateManager() {
        this.stateTransitionTable = {}; // 状态转移表
        this.state = []; // 状态数组
        this.actions = {}; // 状态对应的动作
    }
    ;
    /**
     * 检查这个对象是否能够在当前输入的条件下的状态转移
     * @param obj 绑定状态的对象
     * @param transition 转换条件
     */
    StateManager.prototype.check = function (obj, transition) {
        if (!(obj._state && this.state.indexOf(obj._state))) {
            console.log("这个对象不是这个状态机");
            return;
        }
        var newState = this.stateTransitionTable[obj._state][transition];
        if (!newState) {
            // 不存在跳转的状态
            return;
        }
        obj._state = newState;
        var actions = this.actions[newState];
        for (var index = 0; index < actions.length; index++) {
            var action = actions[index];
            action.call(obj);
        }
    };
    /**
     * 注册状态所执行的动作
     * @param state 状态
     * @param atcion 状态动作
     */
    StateManager.prototype.registeredActionForState = function (state, atcion) {
        if (!this.hasState(state)) {
            console.log("状态机没有这个状态，不能注册动作");
            return;
        }
        if (!this.actions[state] || this.actions[state].length === 'undefined') {
            this.actions[state] = [];
        }
        this.actions[state].push(atcion);
    };
    /**
     * 判断状态机是否存在输入的状态
     * @param state
     */
    StateManager.prototype.hasState = function (state) {
        return this.state.indexOf(state);
    };
    /**
     * 根据 JSON 数据加载状态机
     * @param stateJson
     */
    StateManager.prototype.loadStateFromJosn = function (stateJson) {
        if (!stateJson) {
            console.log("数据为空");
            return;
        }
        if (typeof stateJson === "string") {
            stateJson = JSON.parse(stateJson);
        }
        var tem_state = stateJson.state;
        var tem_trans = stateJson.translations;
        // 生成状态数组
        var stateKeys = Object.keys(tem_state);
        for (var keyIndex = 0; keyIndex < stateKeys.length; keyIndex++) {
            this.state[keyIndex] = tem_state[stateKeys[keyIndex]];
        }
        // 拼接状态转换表
        for (var index = 0; index < tem_trans.length; index++) {
            var translation = tem_trans[index];
            if (!this.stateTransitionTable[translation["from"]]) {
                this.stateTransitionTable[translation["from"]] = {};
            }
            this.stateTransitionTable[translation["from"]][translation["translation"]] = translation["to"];
        }
    };
    return StateManager;
}());
exports.StateManager = StateManager;

cc._RF.pop();