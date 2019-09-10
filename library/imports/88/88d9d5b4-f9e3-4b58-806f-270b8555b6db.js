"use strict";
cc._RF.push(module, '88d9dW0+eNLWIBvJwuFVbbb', 'SnakeStop');
// Scripts/src/state/SnakeStop.ts

Object.defineProperty(exports, "__esModule", { value: true });
var SnakeState_1 = require("./SnakeState");
var SnakeMoveLeft_1 = require("./SnakeMoveLeft");
var SnakeMoveRight_1 = require("./SnakeMoveRight");
var SnakeMoveDown_1 = require("./SnakeMoveDown");
var SnakeMoveUp_1 = require("./SnakeMoveUp");
var SnakeStop = /** @class */ (function (_super) {
    __extends(SnakeStop, _super);
    function SnakeStop() {
        var _this = _super.call(this) || this;
        _this.move();
        console.log("state in stop");
        return _this;
    }
    SnakeStop.prototype.handleInput = function (Snake, input) {
        if (input === SnakeState_1.STATE.LEFT) {
            Snake.state = new SnakeMoveLeft_1.SnakeMoveLeft();
        }
        else if (input === SnakeState_1.STATE.RIGHT) {
            Snake.state = new SnakeMoveRight_1.SnakeMoveRight();
        }
        else if (input === SnakeState_1.STATE.DOWN) {
            Snake.state = new SnakeMoveDown_1.SnakeMoveDown();
        }
        else if (input === SnakeState_1.STATE.UP) {
            Snake.state = new SnakeMoveUp_1.default();
        }
    };
    SnakeStop.prototype.move = function () {
        this.speed_x = 0;
        this.speed_y = 0;
    };
    return SnakeStop;
}(SnakeState_1.SnakeState));
exports.SnakeStop = SnakeStop;

cc._RF.pop();