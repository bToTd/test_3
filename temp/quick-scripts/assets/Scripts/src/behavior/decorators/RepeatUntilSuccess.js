(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/decorators/RepeatUntilSuccess.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bebb4ysP69LvKqTlvIhwJv5', 'RepeatUntilSuccess', __filename);
// Scripts/src/behavior/decorators/RepeatUntilSuccess.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("../core/Decorator");
var constants_1 = require("../constants");
/**
 * RepeatUntilSuccess is a decorator that repeats the tick signal until the
 * node child returns `SUCCESS`, `RUNNING` or `ERROR`. Optionally, a maximum
 * number of repetitions can be defined.
 *
 * @module b3
 * @class RepeatUntilSuccess
 * @extends Decorator
 **/
var RepeatUntilSuccess = /** @class */ (function (_super) {
    __extends(RepeatUntilSuccess, _super);
    /**
     * Creates an instance of RepeatUntilSuccess.
     *
     * - **maxLoop** (*Integer*) Maximum number of repetitions. Default to -1 (infinite).
     * - **child** (*BaseNode*) The child node.
     *
     * @param {Object} params Object with parameters.
     * @param {Number} params.maxLoop Maximum number of repetitions. Default to -1 (infinite).
     * @param {BaseNode} params.child The child node.
     * @memberof RepeatUntilSuccess
     **/
    function RepeatUntilSuccess(maxLoop, child) {
        if (maxLoop === void 0) { maxLoop = -1; }
        var _this = this;
        var data = {
            name: 'RepeatUntilSuccess',
            title: 'Repeat Until Success',
            properties: { maxLoop: -1 },
        };
        _this = _super.call(this, data) || this;
        _this.maxLoop = maxLoop;
        return _this;
    }
    /**
     * Open method.
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    RepeatUntilSuccess.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    RepeatUntilSuccess.prototype.tick = function (tick) {
        if (!this.child) {
            return constants_1.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = constants_1.ERROR;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            // @ts-ignore
            status = this.child._execute(tick);
            if (status == constants_1.FAILURE) {
                i++;
            }
            else {
                break;
            }
        }
        i = tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return RepeatUntilSuccess;
}(Decorator_1.default));
exports.default = RepeatUntilSuccess;
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
        //# sourceMappingURL=RepeatUntilSuccess.js.map
        