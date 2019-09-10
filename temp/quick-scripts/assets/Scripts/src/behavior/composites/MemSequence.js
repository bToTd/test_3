(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/composites/MemSequence.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7b7aeyDM59MYZVHwEPAA8nw', 'MemSequence', __filename);
// Scripts/src/behavior/composites/MemSequence.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Composite_1 = require("../core/Composite");
var constants_1 = require("../constants");
/**
 * MemSequence is similar to Sequence node, but when a child returns a
 * `RUNNING` state, its index is recorded and in the next tick the
 * MemPriority call the child recorded directly, without calling previous
 * children again.
 *
 * @module b3
 * @class MemSequence
 * @extends Composite
 **/
var MemSequence = /** @class */ (function (_super) {
    __extends(MemSequence, _super);
    /**
     * Creates an instance of MemSequence.
     * @param {Object} params
     * @param {Array} params.children
     * @memberof MemSequence
     */
    function MemSequence(data) {
        var _this = this;
        data.name = 'MemSequence';
        _this = _super.call(this, data) || this;
        return _this;
    }
    /**
     * Open method.
     * @method open
     * @param {b3.Tick} tick A tick instance.
     **/
    MemSequence.prototype.open = function (tick) {
        tick.blackboard.set('runningChild', 0, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {b3.Tick} tick A tick instance.
     * @return {Constant} A state constant.
     **/
    MemSequence.prototype.tick = function (tick) {
        var child = tick.blackboard.get('runningChild', tick.tree.id, this.id);
        for (var i = child; i < this.children.length; i++) {
            var status = this.children[i]._execute(tick);
            if (status !== constants_1.SUCCESS) {
                if (status === constants_1.RUNNING) {
                    tick.blackboard.set('runningChild', i, tick.tree.id, this.id);
                }
                return status;
            }
        }
        return constants_1.SUCCESS;
    };
    return MemSequence;
}(Composite_1.default));
exports.default = MemSequence;
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
        //# sourceMappingURL=MemSequence.js.map
        