"use strict";
cc._RF.push(module, '8be57dsVWBEDLuPbkobXBlr', 'Inverter');
// Scripts/src/behavior/decorators/Inverter.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("../core/Decorator");
var constants_1 = require("../constants");
/**
 * The Inverter decorator inverts the result of the child, returning `SUCCESS`
 * for `FAILURE` and `FAILURE` for `SUCCESS`.
 *
 * @module b3
 * @class Inverter
 * @extends Decorator
 **/
var Inverter = /** @class */ (function (_super) {
    __extends(Inverter, _super);
    /**
     * Creates an instance of Inverter.
     * @param {Object} params
     * @param {BaseNode} params.child The child node.
     * @memberof Inverter
     */
    function Inverter(data) {
        var _this = this;
        data.name = 'Inverter';
        _this = _super.call(this, data) || this;
        return _this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    Inverter.prototype.tick = function (tick) {
        if (!this.child) {
            return constants_1.ERROR;
        }
        var status = this.child._execute(tick);
        if (status == constants_1.SUCCESS) {
            status = constants_1.FAILURE;
        }
        else if (status == constants_1.FAILURE) {
            status = constants_1.SUCCESS;
        }
        return status;
    };
    return Inverter;
}(Decorator_1.default));
exports.default = Inverter;
;

cc._RF.pop();