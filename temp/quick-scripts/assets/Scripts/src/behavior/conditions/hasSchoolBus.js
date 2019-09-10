(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/conditions/hasSchoolBus.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0340d26r7pGVaymz9eAsO7F', 'hasSchoolBus', __filename);
// Scripts/src/behavior/conditions/hasSchoolBus.ts

Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
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
}(__1.Condition));
exports.default = hasSchoolBus;

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
        //# sourceMappingURL=hasSchoolBus.js.map
        