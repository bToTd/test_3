(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/actions/Receive.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'aa0f2XPYDdMIJR3PaySnLeS', 'Receive', __filename);
// Scripts/src/behavior/actions/Receive.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../core/Action");
var constants_1 = require("../constants");
var Receive = /** @class */ (function (_super) {
    __extends(Receive, _super);
    function Receive() {
        var _this = this;
        var data = {
            name: 'Receive'
        };
        _this = _super.call(this, data) || this;
        return _this;
    }
    Receive.prototype.tick = function (tick) {
        console.log("\u9886\u53D6 " + this.properties.level + " \u7B49\u7EA7\u5956\u52B1");
        tick.target.level = this.properties.level;
        return constants_1.SUCCESS;
    };
    return Receive;
}(Action_1.default));
exports.default = Receive;

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
        //# sourceMappingURL=Receive.js.map
        