(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/actions/Sleep.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '29ee4kmTllL3JLRePdr5EG+', 'Sleep', __filename);
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
        //# sourceMappingURL=Sleep.js.map
        