(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/actions/Succeeder.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e903daCeQ9OwK6DZ/ly9kU5', 'Succeeder', __filename);
// Scripts/src/behavior/actions/Succeeder.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../core/Action");
var constants_1 = require("../constants");
/**
 * This action node returns `SUCCESS` always.
 *
 * @module b3
 * @class Succeeder
 * @extends Action
 **/
var Succeeder = /** @class */ (function (_super) {
    __extends(Succeeder, _super);
    /**
     * Creates an instance of Succeeder.
     * @memberof Succeeder
     */
    function Succeeder() {
        var _this = this;
        var data = {
            name: "Succeeder"
        };
        _this = _super.call(this, data) || this;
        return _this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} Always return `SUCCESS`.
     **/
    Succeeder.prototype.tick = function (tick) {
        console.log("欢迎来到 Succeeder Action");
        console.log(tick);
        return constants_1.SUCCESS;
    };
    return Succeeder;
}(Action_1.default));
exports.default = Succeeder;
;

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
        //# sourceMappingURL=Succeeder.js.map
        