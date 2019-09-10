(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/state/SnakeMoveUp.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '53a58YD9VtFbZ1q2QqbKZlZ', 'SnakeMoveUp', __filename);
// Scripts/src/state/SnakeMoveUp.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SnakeState_1 = require("./SnakeState");
var SnakeMoveRight_1 = require("./SnakeMoveRight");
var SnakeMoveLeft_1 = require("./SnakeMoveLeft");
var SnakeStop_1 = require("./SnakeStop");
/**
 *@description:
 *@author: hwc bToTd
 *@date: 2019-07-25 19:38:22
 *@version
 */
var SnakeMoveUp = /** @class */ (function (_super) {
    __extends(SnakeMoveUp, _super);
    function SnakeMoveUp() {
        var _this = _super.call(this) || this;
        console.log("state in up");
        _this.move();
        return _this;
    }
    SnakeMoveUp.prototype.handleInput = function (Snake, input) {
        if (input === SnakeState_1.STATE.RIGHT) {
            Snake.state = new SnakeMoveRight_1.SnakeMoveRight();
        }
        else if (input === SnakeState_1.STATE.LEFT) {
            Snake.state = new SnakeMoveLeft_1.SnakeMoveLeft();
        }
        else if (input === SnakeState_1.STATE.STOP) {
            Snake.state = new SnakeStop_1.SnakeStop();
        }
    };
    SnakeMoveUp.prototype.move = function () {
        this.speed_x = 0;
        this.speed_y = 1;
    };
    return SnakeMoveUp;
}(SnakeState_1.SnakeState));
exports.default = SnakeMoveUp;

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
        //# sourceMappingURL=SnakeMoveUp.js.map
        