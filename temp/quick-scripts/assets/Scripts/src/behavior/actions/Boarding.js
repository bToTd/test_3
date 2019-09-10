(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/actions/Boarding.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '73f632XhKhGn66/OuF3ZJGb', 'Boarding', __filename);
// Scripts/src/behavior/actions/Boarding.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../core/Action");
var constants_1 = require("../constants");
var Boarding = /** @class */ (function (_super) {
    __extends(Boarding, _super);
    function Boarding() {
        var _this = this;
        var data = {
            name: "Boarding"
        };
        _this = _super.call(this, data) || this;
        return _this;
    }
    Boarding.prototype.tick = function (tick) {
        console.log(tick.target.name + " is on school bus");
        return constants_1.SUCCESS;
    };
    return Boarding;
}(Action_1.default));
exports.default = Boarding;

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
        //# sourceMappingURL=Boarding.js.map
        