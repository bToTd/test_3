"use strict";
cc._RF.push(module, '29ee4kmTllL3JLRePdr5EG+', 'Sleep');
// Scripts/src/behavior/actions/Sleep.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../core/Action");
var constants_1 = require("../constants");
var Sleep = /** @class */ (function (_super) {
    __extends(Sleep, _super);
    function Sleep() {
        var _this = this;
        var data = {
            name: "Sleep"
        };
        _this = _super.call(this, data) || this;
        return _this;
    }
    Sleep.prototype.tick = function (tick) {
        console.log(tick.target.name + " is sleep");
        return constants_1.SUCCESS;
    };
    return Sleep;
}(Action_1.default));
exports.default = Sleep;

cc._RF.pop();