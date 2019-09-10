(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/actions/Runner.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8367bc5v8VO3YuMQpy9Oke/', 'Runner', __filename);
// Scripts/src/behavior/actions/Runner.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../core/Action");
var constants_1 = require("../constants");
/**
 * This action node returns RUNNING always.
 *
 * @module b3
 * @class Runner
 * @extends Action
 **/
var Runner = /** @class */ (function (_super) {
    __extends(Runner, _super);
    /**
     * Creates an instance of Runner.
     * @memberof Runner
     */
    function Runner() {
        return _super.call(this, { name: 'Runner' }) || this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} Always return `RUNNING`.
     **/
    Runner.prototype.tick = function (tick) {
        return constants_1.RUNNING;
    };
    return Runner;
}(Action_1.default));
exports.default = Runner;
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
        //# sourceMappingURL=Runner.js.map
        