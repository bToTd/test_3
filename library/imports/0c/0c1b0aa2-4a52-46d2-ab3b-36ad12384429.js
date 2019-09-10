"use strict";
cc._RF.push(module, '0c1b0qiSlJG0qs7Nq0SOEQp', 'Priority');
// Scripts/src/behavior/composites/Priority.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Composite_1 = require("../core/Composite");
var constants_1 = require("../constants");
/**
 * Priority ticks its children sequentially until one of them returns
 * `SUCCESS`, `RUNNING` or `ERROR`. If all children return the failure state,
 * the priority also returns `FAILURE`.
 *
 * @module b3
 * @class Priority
 * @extends Composite
 **/
var Priority = /** @class */ (function (_super) {
    __extends(Priority, _super);
    /**
     * Creates an instance of Priority.
     * @param {Object} params
     * @param {Array} params.children
     * @memberof Priority
     */
    function Priority(data) {
        var _this = this;
        data.name = 'Priority';
        _this = _super.call(this, data) || this;
        return _this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    Priority.prototype.tick = function (tick) {
        for (var i = 0; i < this.children.length; i++) {
            var status = this.children[i]._execute(tick);
            if (status !== constants_1.FAILURE) {
                return status;
            }
        }
        return constants_1.FAILURE;
    };
    return Priority;
}(Composite_1.default));
exports.default = Priority;
;

cc._RF.pop();