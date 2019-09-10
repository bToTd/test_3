(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/actions/Wait.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cf774RQvwVIq4jKGVbbVaPJ', 'Wait', __filename);
// Scripts/src/behavior/actions/Wait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = require("../core/Action");
var constants_1 = require("../constants");
/**
 * Wait a few seconds.
 *
 * @module b3
 * @class Wait
 * @extends Action
 **/
var Wait = /** @class */ (function (_super) {
    __extends(Wait, _super);
    /**
     * Creates an instance of Wait.
     * @param {Object} settings Object with parameters
     * @param {Number} settings.milliseconds Maximum time, in milliseconds, a child can execute.
     * @memberof Wait
     */
    function Wait(_a) {
        var _b = (_a === void 0 ? {} : _a).milliseconds, milliseconds = _b === void 0 ? 0 : _b;
        var _this = _super.call(this, {
            name: 'Wait',
            title: 'Wait <milliseconds>ms',
            properties: { milliseconds: 0 },
        }) || this;
        _this.endTime = milliseconds;
        return _this;
    }
    /**
     * Open method.
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    Wait.prototype.open = function (tick) {
        var startTime = (new Date()).getTime();
        tick.blackboard.set('startTime', startTime, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    Wait.prototype.tick = function (tick) {
        var currTime = (new Date()).getTime();
        var startTime = tick.blackboard.get('startTime', tick.tree.id, this.id);
        if (currTime - startTime > this.endTime) {
            return constants_1.SUCCESS;
        }
        return constants_1.RUNNING;
    };
    return Wait;
}(Action_1.default));
exports.default = Wait;
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
        //# sourceMappingURL=Wait.js.map
        