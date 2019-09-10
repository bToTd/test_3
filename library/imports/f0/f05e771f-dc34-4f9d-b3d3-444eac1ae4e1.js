"use strict";
cc._RF.push(module, 'f05e7cf3DRPnbPTRE6sGuTh', 'Sequence');
// Scripts/src/behavior/composites/Sequence.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Composite_1 = require("../core/Composite");
var constants_1 = require("../constants");
/**
 * The Sequence node ticks its children sequentially until one of them
 * returns `FAILURE`, `RUNNING` or `ERROR`. If all children return the
 * success state, the sequence also returns `SUCCESS`.
 *
 * @module b3
 * @class Sequence
 * @extends Composite
 **/
var Sequence = /** @class */ (function (_super) {
    __extends(Sequence, _super);
    /**
     * Creates an instance of Sequence.
     * @param {Object} params
     * @param {Array} params.children
     * @memberof Sequence
     */
    function Sequence(data) {
        var _this = this;
        data.name = 'Sequence';
        _this = _super.call(this, data) || this;
        return _this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    Sequence.prototype.tick = function (tick) {
        for (var i = 0; i < this.children.length; i++) {
            var status = this.children[i]._execute(tick);
            if (status !== constants_1.SUCCESS) {
                return status;
            }
        }
        return constants_1.SUCCESS;
    };
    return Sequence;
}(Composite_1.default));
exports.default = Sequence;
;

cc._RF.pop();