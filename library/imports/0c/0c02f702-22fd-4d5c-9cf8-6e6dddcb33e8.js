"use strict";
cc._RF.push(module, '0c02fcCIv1NXJz4bm3dyzPo', 'Error');
// Scripts/src/behavior/actions/Error.ts

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
var Action_1 = require("../core/Action");
/**
 * This action node returns `ERROR` always.
 *
 * @module b3
 * @class Error
 * @extends Action
 **/
var Error = /** @class */ (function (_super) {
    __extends(Error, _super);
    /**
     * Creates an instance of Error.
     * @memberof Error
     */
    function Error() {
        return _super.call(this, { name: 'Error' }) || this;
    }
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} Always return `ERROR`.
     **/
    Error.prototype.tick = function (tick) {
        return constants_1.ERROR;
    };
    return Error;
}(Action_1.default));
exports.default = Error;
;

cc._RF.pop();