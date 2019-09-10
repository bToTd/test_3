(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/actions/NotAward.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '96549PTD+dPMpDzxCLbDIuJ', 'NotAward', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=NotAward.js.map
        