(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/decorators/Inverter.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8be57dsVWBEDLuPbkobXBlr', 'Inverter', __filename);
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
        //# sourceMappingURL=Inverter.js.map
        