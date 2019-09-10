"use strict";
cc._RF.push(module, '796ce6/mMNFdKiOFL2jE/Kv', 'goToSchool');
// Scripts/src/behavior/actions/goToSchool.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../core/Action");
var constants_1 = require("../constants");
var goToSchool = /** @class */ (function (_super) {
    __extends(goToSchool, _super);
    function goToSchool() {
        var _this = this;
        var data = {
            name: "goToSchool"
        };
        _this = _super.call(this, data) || this;
        return _this;
    }
    goToSchool.prototype.tick = function (tick) {
        console.log(tick.target.name + " go to school");
        return constants_1.SUCCESS;
    };
    return goToSchool;
}(Action_1.default));
exports.default = goToSchool;

cc._RF.pop();