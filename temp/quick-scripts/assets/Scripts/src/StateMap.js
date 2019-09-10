(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/StateMap.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '914fcpwbQhDn6O/Vhf2vRz9', 'StateMap', __filename);
// Scripts/src/StateMap.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *@description: 集合使用某一类状态机的所有对象
 *@author: hwc bToTd
 *@date: 2019-08-28 18:19:34
 *@version
 */
var StateMap = /** @class */ (function () {
    function StateMap(state) {
        this.objArray = [];
        this.state = null;
        this.listen = '';
        this.state = state;
    }
    StateMap.prototype.getState = function () {
        return this.state;
    };
    StateMap.prototype.push = function (obj) {
        // 状态验证
        if (!(obj._state && this.state.hasState(obj._state))) {
            console.log("状态类型不符合，无法进入当前容器");
            return;
        }
        if (this.objArray.indexOf(obj)) {
            // 注册对象不能重复
            return;
        }
        this.objArray.push(obj);
    };
    /**
     * 移除状态机集合中管理的对象
     * @param obj
     */
    StateMap.prototype.remove = function (obj) {
        var index = this.objArray.indexOf(obj);
        if (index === -1) {
            // 没有这个元素，不需要执行操作
            return;
        }
        this.objArray.slice(index, 1);
    };
    StateMap.prototype.appendListen = function () {
    };
    /**
     * 状态机的跳转
     * @param transition 转换条件
     */
    StateMap.prototype.run = function (transition) {
        for (var index = 0; index < this.objArray.length; index++) {
            this.state.check(this.objArray[index], transition);
        }
    };
    return StateMap;
}());
exports.default = StateMap;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=StateMap.js.map
        