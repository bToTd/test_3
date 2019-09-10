"use strict";
cc._RF.push(module, '7e008flpdFH7ZbDFAcFjjSD', 'SnakeMoveRight');
// Scripts/src/state/SnakeMoveRight.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SnakeState_1 = require("./SnakeState");
var SnakeMoveDown_1 = require("./SnakeMoveDown");
var SnakeMoveUp_1 = require("./SnakeMoveUp");
var SnakeStop_1 = require("./SnakeStop");
var SnakeMoveRight = /** @class */ (function (_super) {
    __extends(SnakeMoveRight, _super);
    function SnakeMoveRight() {
        var _this = _super.call(this) || this;
        _this.move();
        console.log("state in right");
        return _this;
    }
    SnakeMoveRight.prototype.handleInput = function (Snake, input) {
        if (input === SnakeState_1.STATE.DOWN) {
            Snake.state = new SnakeMoveDown_1.SnakeMoveDown();
        }
        else if (input === SnakeState_1.STATE.UP) {
            Snake.state = new SnakeMoveUp_1.default();
        }
        else if (input === SnakeState_1.STATE.STOP) {
            Snake.state = new SnakeStop_1.SnakeStop();
        }
    };
    SnakeMoveRight.prototype.move = function () {
        this.speed_x = 1;
        this.speed_y = 0;
    };
    return SnakeMoveRight;
}(SnakeState_1.SnakeState));
exports.SnakeMoveRight = SnakeMoveRight;

cc._RF.pop();