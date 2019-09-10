"use strict";
cc._RF.push(module, '1f113BHLaRA66yBUoQJNTTo', 'hasBicycle');
// Scripts/src/behavior/conditions/hasBicycle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Condition_1 = require("../core/Condition");
var constants_1 = require("../constants");
var hasBicycle = /** @class */ (function (_super) {
    __extends(hasBicycle, _super);
    function hasBicycle() {
        var _this = this;
        var data = {
            name: 'hasBicycle'
        };
        _this = _super.call(this, data) || this;
        return _this;
    }
    hasBicycle.prototype.tick = function (tick) {
        if (tick.target.bicycle) {
            console.log("有车一族");
            return constants_1.SUCCESS;
        }
        else {
            console.log("没有自行车");
            return constants_1.FAILURE;
        }
    };
    return hasBicycle;
}(Condition_1.default));
exports.default = hasBicycle;

cc._RF.pop();