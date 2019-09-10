(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/composites/MemPriority.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9a06eDtFHdDuZlAIyuIgT6s', 'MemPriority', __filename);
// Scripts/src/behavior/composites/MemPriority.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Composite_1 = require("../core/Composite");
var constants_1 = require("../constants");
/**
 * MemPriority is similar to Priority node, but when a child returns a
 * `RUNNING` state, its index is recorded and in the next tick the,
 * MemPriority calls the child recorded directly, without calling previous
 * children again.
 *
 * @module b3
 * @class MemPriority
 * @extends Composite
 **/
var MemPriority = /** @class */ (function (_super) {
    __extends(MemPriority, _super);
    /**
     * Creates an instance of MemPriority.
     * @param {Object} params
     * @param {Array} params.children
     * @memberof MemPriority
     */
    function MemPriority(data) {
        var _this = this;
        data.name = 'MemPriority';
        _this = _super.call(this, data) || this;
        return _this;
    }
    /**
     * Open method.
     * @method open
     * @param {b3.Tick} tick A tick instance.
     **/
    MemPriority.prototype.open = function (tick) {
        tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    MemPriority.prototype.tick = function (tick) {
        var child = tick.blackboard.get('runningChild', tick.tree.id, this.id);
        for (var i = child; i < this.children.length; i++) {
            var status = this.children[i]._execute(tick);
            if (status !== constants_1.FAILURE) {
                if (status === constants_1.RUNNING) {
                    tick.blackboard.set('runningChild', i, tick.tree.id, this.id);
                }
                return status;
            }
        }
        return constants_1.FAILURE;
    };
    return MemPriority;
}(Composite_1.default));
exports.default = MemPriority;
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
        //# sourceMappingURL=MemPriority.js.map
        