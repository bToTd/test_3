(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/actions/Failer.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd264cm8TnJC6qLPLNq0Qbcu', 'Failer', __filename);
// Scripts/src/behavior/actions/Failer.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../core/Action");
var constants_1 = require("../constants");
/**
 * This action node returns `FAILURE` always.
 *
 * @module b3
 * @class Failer
 * @extends Action
 **/
var Failer = /** @class */ (function (_super) {
    __extends(Failer, _super);
    /**
     * Creates an instance of Failer.
     * @memberof Failer
     */
    function Failer() {
        return _super.call(this, { name: 'Failer' }) || this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} Always return `FAILURE`.
     **/
    Failer.prototype.tick = function (tick) {
        console.log("欢迎来到 Failer Action");
        return constants_1.FAILURE;
    };
    return Failer;
}(Action_1.default));
exports.default = Failer;
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
        //# sourceMappingURL=Failer.js.map
        