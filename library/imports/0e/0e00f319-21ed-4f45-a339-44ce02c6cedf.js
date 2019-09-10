"use strict";
cc._RF.push(module, '0e00fMZIe1PRaM5RM4Cxs7f', 'Limiter');
// Scripts/src/behavior/decorators/Limiter.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("../core/Decorator");
var constants_1 = require("../constants");
/**
 * This decorator limit the number of times its child can be called. After a
 * certain number of times, the Limiter decorator returns `FAILURE` without
 * executing the child.
 *
 * @module b3
 * @class Limiter
 * @extends Decorator
 **/
var Limiter = /** @class */ (function (_super) {
    __extends(Limiter, _super);
    /**
     * Creates an instance of Limiter.
     *
     * Settings parameters:
     *
     * - **maxLoop** (*Integer*) Maximum number of repetitions.
     * - **child** (*BaseNode*) The child node.
     *
     * @param {Object} params
     * @param {Number} params.maxLoop Maximum number of repetitions.
     * @param {BaseNode} params.child The child node.
     * @memberof Limiter
     */
    function Limiter(maxLoop, child) {
        var _this = this;
        var data = {
            name: 'Limiter',
            title: 'Limit <maxLoop> Activations',
            properties: { maxLoop: 1 },
        };
        _this = _super.call(this, data) || this;
        if (!maxLoop) {
            throw 'maxLoop parameter in Limiter decorator is an obligatory parameter';
        }
        _this.maxLoop = maxLoop;
        return _this;
    }
    /**
     * Open method.
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    Limiter.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    Limiter.prototype.tick = function (tick) {
        if (!this.child) {
            return constants_1.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        if (i < this.maxLoop) {
            var status = this.child._execute(tick);
            if (status == constants_1.SUCCESS || status == constants_1.FAILURE)
                tick.blackboard.set('i', i + 1, tick.tree.id, this.id);
            return status;
        }
        return constants_1.FAILURE;
    };
    return Limiter;
}(Decorator_1.default));
exports.default = Limiter;
;

cc._RF.pop();