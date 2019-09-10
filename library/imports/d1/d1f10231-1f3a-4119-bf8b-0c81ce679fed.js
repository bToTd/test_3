"use strict";
cc._RF.push(module, 'd1f10IxHzpBGb+LDIHOZ5/t', 'HasReceived');
// Scripts/src/behavior/conditions/HasReceived.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Condition_1 = require("../core/Condition");
var constants_1 = require("../constants");
var HasReceived = /** @class */ (function (_super) {
    __extends(HasReceived, _super);
    function HasReceived() {
        var _this = this;
        var data = {
            name: 'HasReceived'
        };
        _this = _super.call(this, data) || this;
        return _this;
    }
    HasReceived.prototype.tick = function (tick) {
        if (tick.target.level >= this.properties.level) {
            console.log("\u5DF2\u7ECF\u9886\u53D6\u4E86 " + this.properties.level + " \u7B49\u7EA7\u7684\u5956\u52B1");
            return constants_1.SUCCESS;
        }
        else {
            console.log("\u8FD8\u6CA1\u6709\u9886\u53D6 " + this.properties.level + " \u7B49\u7EA7\u7684\u5956\u52B1");
            return constants_1.FAILURE;
        }
    };
    return HasReceived;
}(Condition_1.default));
exports.default = HasReceived;

cc._RF.pop();