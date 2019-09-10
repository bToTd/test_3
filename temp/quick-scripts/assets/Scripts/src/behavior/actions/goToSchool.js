(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/actions/goToSchool.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '796ce6/mMNFdKiOFL2jE/Kv', 'goToSchool', __filename);
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
        //# sourceMappingURL=goToSchool.js.map
        