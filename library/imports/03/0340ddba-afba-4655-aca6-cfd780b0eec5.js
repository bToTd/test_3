"use strict";
cc._RF.push(module, '0340d26r7pGVaymz9eAsO7F', 'hasSchoolBus');
// Scripts/src/behavior/conditions/hasSchoolBus.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Condition_1 = require("../core/Condition");
var constants_1 = require("../constants");
var hasSchoolBus = /** @class */ (function (_super) {
    __extends(hasSchoolBus, _super);
    function hasSchoolBus() {
        var _this = this;
        var data = {
            name: 'hasSchoolBus'
        };
        _this = _super.call(this, data) || this;
        return _this;
    }
    hasSchoolBus.prototype.tick = function (tick) {
        if (tick.target.time > this.properties.time) {
            console.log("too late and no bus");
            return constants_1.FAILURE;
        }
        else {
            console.log("congletulations, bus is coming");
            return constants_1.SUCCESS;
        }
    };
    return hasSchoolBus;
}(Condition_1.default));
exports.default = hasSchoolBus;

cc._RF.pop();