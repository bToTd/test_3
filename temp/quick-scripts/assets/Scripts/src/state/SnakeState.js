(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/state/SnakeState.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a263f+0iHNKZ4/nmV6iacfM', 'SnakeState', __filename);
// Scripts/src/state/SnakeState.ts

/**
 *@description: 状态设计模式的一个demo
 *@author: hwc bToTd
 *@date: 2019-07-25 19:31:39
 *@version 0.1.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var SnakeState = /** @class */ (function () {
    function SnakeState() {
        this.speed_x = 0;
        this.speed_y = 0;
    }
    SnakeState.prototype.getSpeed = function () {
        return {
            xv: this.speed_x,
            yv: this.speed_y
        };
    };
    return SnakeState;
}());
exports.SnakeState = SnakeState;
var STATE;
(function (STATE) {
    STATE[STATE["UP"] = 0] = "UP";
    STATE[STATE["RIGHT"] = 1] = "RIGHT";
    STATE[STATE["DOWN"] = 2] = "DOWN";
    STATE[STATE["LEFT"] = 3] = "LEFT";
    STATE[STATE["STOP"] = 4] = "STOP";
})(STATE = exports.STATE || (exports.STATE = {}));

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
        //# sourceMappingURL=SnakeState.js.map
        