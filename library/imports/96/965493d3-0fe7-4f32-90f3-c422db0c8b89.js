"use strict";
cc._RF.push(module, '96549PTD+dPMpDzxCLbDIuJ', 'NotAward');
// Scripts/src/behavior/actions/NotAward.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../core/Action");
var constants_1 = require("../constants");
var NotAward = /** @class */ (function (_super) {
    __extends(NotAward, _super);
    function NotAward() {
        var _this = this;
        var data = {
            name: 'NotAward'
        };
        _this = _super.call(this, data) || this;
        return _this;
    }
    NotAward.prototype.tick = function (tick) {
        console.log("\u6CA1\u6709\u53EF\u4EE5\u9886\u53D6\u7684\u5956\u52B1");
        return constants_1.SUCCESS;
    };
    return NotAward;
}(Action_1.default));
exports.default = NotAward;

cc._RF.pop();