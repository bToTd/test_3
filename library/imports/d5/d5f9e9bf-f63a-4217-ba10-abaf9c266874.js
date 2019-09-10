"use strict";
cc._RF.push(module, 'd5f9em/9jpCF7oQq6+cJmh0', 'CanReceive');
// Scripts/src/behavior/conditions/CanReceive.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Condition_1 = require("../core/Condition");
var constants_1 = require("../constants");
var CanReceive = /** @class */ (function (_super) {
    __extends(CanReceive, _super);
    function CanReceive() {
        var _this = this;
        var data = {
            name: 'CanReceive',
        };
        _this = _super.call(this, data) || this;
        return _this;
    }
    CanReceive.prototype.tick = function (tick) {
        if (tick.target.ReceivingCondition >= this.properties.ReceivingCondition) {
            console.log("\u79EF\u5206\u4E3A" + tick.target.ReceivingCondition + "\uFF0C\u6EE1\u8DB3\u6761\u4EF6\uFF08" + this.properties.ReceivingCondition + "\uFF09");
            return constants_1.SUCCESS;
        }
        else {
            console.log("\u79EF\u5206\u4E3A" + tick.target.ReceivingCondition + "\uFF0C\u4E0D\u6EE1\u8DB3\u6761\u4EF6\uFF08" + this.properties.ReceivingCondition + "\uFF09");
            return constants_1.FAILURE;
        }
    };
    return CanReceive;
}(Condition_1.default));
exports.default = CanReceive;

cc._RF.pop();