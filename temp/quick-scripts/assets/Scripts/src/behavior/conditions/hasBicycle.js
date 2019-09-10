(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/conditions/hasBicycle.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1f113BHLaRA66yBUoQJNTTo', 'hasBicycle', __filename);
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
        //# sourceMappingURL=hasBicycle.js.map
        