"use strict";
cc._RF.push(module, 'baac4rD88lGZKgsI2UD9JCf', 'isBrokenFoot');
// Scripts/src/behavior/conditions/isBrokenFoot.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Condition_1 = require("../core/Condition");
var constants_1 = require("../constants");
var isBrokenFoot = /** @class */ (function (_super) {
    __extends(isBrokenFoot, _super);
    function isBrokenFoot() {
        var _this = this;
        var data = {
            name: 'isBrokenFoot'
        };
        _this = _super.call(this, data) || this;
        return _this;
    }
    isBrokenFoot.prototype.tick = function (tick) {
        if (tick.target.foot) {
            console.log("脚断了");
            return constants_1.SUCCESS;
        }
        else {
            console.log("脚没断, 走路上学");
            return constants_1.FAILURE;
        }
    };
    return isBrokenFoot;
}(Condition_1.default));
exports.default = isBrokenFoot;

cc._RF.pop();