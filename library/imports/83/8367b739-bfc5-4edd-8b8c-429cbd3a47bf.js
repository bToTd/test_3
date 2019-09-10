"use strict";
cc._RF.push(module, '8367bc5v8VO3YuMQpy9Oke/', 'Runner');
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