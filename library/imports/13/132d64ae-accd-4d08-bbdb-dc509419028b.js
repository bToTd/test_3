"use strict";
cc._RF.push(module, '132d6SurM1NCLvb3FCUGQKL', 'MaxTime');
// Scripts/src/behavior/decorators/MaxTime.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("../core/Decorator");
var constants_1 = require("../constants");
/**
 * The MaxTime decorator limits the maximum time the node child can execute.
 * Notice that it does not interrupt the execution itself (i.e., the child
 * must be non-preemptive), it only interrupts the node after a `RUNNING`
 * status.
 *
 * @module b3
 * @class MaxTime
 * @extends Decorator
 **/
var MaxTime = /** @class */ (function (_super) {
    __extends(MaxTime, _super);
    /**
     * Creates an instance of MaxTime.
     *
     * - **maxTime** (*Integer*) Maximum time a child can execute.
     * - **child** (*BaseNode*) The child node.
  
     * @param {Object} params Object with parameters.
     * @param {Number} params.maxTime Maximum time a child can execute.
     * @param {BaseNode} params.child The child node.
     * @memberof MaxTime
     */
    function MaxTime(maxTime, child) {
        if (maxTime === void 0) { maxTime = 0; }
        var _this = this;
        var data = {
            name: 'MaxTime',
            title: 'Max <maxTime>ms',
            properties: { maxTime: 0 },
        };
        _this = _super.call(this, data) || this;
        if (!maxTime) {
            throw 'maxTime parameter in MaxTime decorator is an obligatory parameter';
        }
        _this.maxTime = maxTime;
        return _this;
    }
    /**
     * Open method.
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    MaxTime.prototype.open = function (tick) {
        var startTime = (new Date()).getTime();
        tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    MaxTime.prototype.tick = function (tick) {
        if (!this.child) {
            return constants_1.ERROR;
        }
        var currTime = (new Date()).getTime();
        var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
        var status = this.child._execute(tick);
        if (currTime - startTime > this.maxTime) {
            return constants_1.FAILURE;
        }
        return status;
    };
    return MaxTime;
}(Decorator_1.default));
exports.default = MaxTime;
;

cc._RF.pop();