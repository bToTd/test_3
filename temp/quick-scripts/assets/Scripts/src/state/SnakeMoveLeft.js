(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/state/SnakeMoveLeft.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b90b3Ms699JZ5A2FgNmVAzC', 'SnakeMoveLeft', __filename);
// Scripts/src/state/SnakeMoveLeft.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SnakeState_1 = require("./SnakeState");
var SnakeMoveUp_1 = require("./SnakeMoveUp");
var SnakeMoveDown_1 = require("./SnakeMoveDown");
var SnakeStop_1 = require("./SnakeStop");
var SnakeMoveLeft = /** @class */ (function (_super) {
    __extends(SnakeMoveLeft, _super);
    function SnakeMoveLeft() {
        var _this = _super.call(this) || this;
        _this.move();
        console.log("state in left");
        return _this;
    }
    SnakeMoveLeft.prototype.handleInput = function (Snake, input) {
        if (input === SnakeState_1.STATE.UP) {
            Snake.state = new SnakeMoveUp_1.default();
        }
        else if (input === SnakeState_1.STATE.DOWN) {
            Snake.state = new SnakeMoveDown_1.SnakeMoveDown();
        }
        else if (input === SnakeState_1.STATE.STOP) {
            Snake.state = new SnakeStop_1.SnakeStop();
        }
    };
    SnakeMoveLeft.prototype.move = function () {
        this.speed_x = -1;
        this.speed_y = 0;
    };
    return SnakeMoveLeft;
}(SnakeState_1.SnakeState));
exports.SnakeMoveLeft = SnakeMoveLeft;

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
        //# sourceMappingURL=SnakeMoveLeft.js.map
        