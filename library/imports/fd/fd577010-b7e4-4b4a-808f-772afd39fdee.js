"use strict";
cc._RF.push(module, 'fd577AQt+RLSoCPdyr9Of3u', 'RepeatUntilFailure');
// Scripts/src/behavior/decorators/RepeatUntilFailure.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("../core/Decorator");
var constants_1 = require("../constants");
/**
 * RepeatUntilFailure is a decorator that repeats the tick signal until the
 * node child returns `FAILURE`, `RUNNING` or `ERROR`. Optionally, a maximum
 * number of repetitions can be defined.
 *
 * @module b3
 * @class RepeatUntilFailure
 * @extends Decorator
 **/
var RepeatUntilFailure = /** @class */ (function (_super) {
    __extends(RepeatUntilFailure, _super);
    /**
     * Creates an instance of RepeatUntilFailure.
     *
     * - **maxLoop** (*Integer*) Maximum number of repetitions. Default to -1 (infinite).
     * - **child** (*BaseNode*) The child node.
     *
     * @param {Object} params Object with parameters.
     * @param {Number} params.maxLoop Maximum number of repetitions. Default to -1 (infinite).
     * @param {BaseNode} params.child The child node.
     * @memberof RepeatUntilFailure
     **/
    function RepeatUntilFailure(maxLoop, child) {
        if (maxLoop === void 0) { maxLoop = -1; }
        var _this = this;
        var data = {
            name: 'RepeatUntilFailure',
            title: 'Repeat Until Failure',
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
    RepeatUntilFailure.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    RepeatUntilFailure.prototype.tick = function (tick) {
        if (!this.child) {
            return constants_1.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = constants_1.ERROR;
        while (this.maxLoop < 0 || i < this.maxLoop) {
            // @ts-ignore
            status = this.child._execute(tick);
            if (status == constants_1.SUCCESS) {
                i++;
            }
            else {
                break;
            }
        }
        i = tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return RepeatUntilFailure;
}(Decorator_1.default));
exports.default = RepeatUntilFailure;
;

cc._RF.pop();