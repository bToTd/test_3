(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/composites/Sequence.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f05e7cf3DRPnbPTRE6sGuTh', 'Sequence', __filename);
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
        //# sourceMappingURL=Sequence.js.map
        