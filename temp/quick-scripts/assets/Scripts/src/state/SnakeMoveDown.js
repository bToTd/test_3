(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/state/SnakeMoveDown.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '555cfHnOCZMoow0Ci0yjouP', 'SnakeMoveDown', __filename);
// Scripts/src/state/SnakeMoveDown.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SnakeState_1 = require("./SnakeState");
var SnakeMoveLeft_1 = require("./SnakeMoveLeft");
var SnakeMoveRight_1 = require("./SnakeMoveRight");
var SnakeStop_1 = require("./SnakeStop");
var SnakeMoveDown = /** @class */ (function (_super) {
    __extends(SnakeMoveDown, _super);
    function SnakeMoveDown() {
        var _this = _super.call(this) || this;
        _this.move();
        console.log("state in down");
        return _this;
    }
    SnakeMoveDown.prototype.handleInput = function (Snake, input) {
        if (input === SnakeState_1.STATE.LEFT) {
            Snake.state = new SnakeMoveLeft_1.SnakeMoveLeft();
        }
        else if (input === SnakeState_1.STATE.RIGHT) {
            Snake.state = new SnakeMoveRight_1.SnakeMoveRight();
        }
        else if (input === SnakeState_1.STATE.STOP) {
            Snake.state = new SnakeStop_1.SnakeStop();
        }
    };
    SnakeMoveDown.prototype.move = function () {
        this.speed_x = 0;
        this.speed_y = -1;
    };
    return SnakeMoveDown;
}(SnakeState_1.SnakeState));
exports.SnakeMoveDown = SnakeMoveDown;

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
        //# sourceMappingURL=SnakeMoveDown.js.map
        