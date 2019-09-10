(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/core/Condition.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b19c1i5ABxE8qqbNmxDeoBF', 'Condition', __filename);
// Scripts/src/behavior/core/Condition.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseNode_1 = require("./BaseNode");
/**
 * Condition is the base class for all condition nodes. Thus, if you want to
 * create new custom condition nodes, you need to inherit from this class.
 *
 * @class Condition
 * @extends BaseNode
 **/
var Condition = /** @class */ (function (_super) {
    __extends(Condition, _super);
    /**
     * Creates an instance of Condition.
     * @param {Object} options
     * @param {Object} options.name Node name. Default to `Condition`.
     * @param {String} options.title
     * @param {Object} options.properties
     * @memberof Condition
     */
    function Condition(data) {
        var _this = this;
        data.category = 'condition'; //CONDITION;
        _this = _super.call(this, data) || this;
        return _this;
    }
    return Condition;
}(BaseNode_1.default));
exports.default = Condition;
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
        //# sourceMappingURL=Condition.js.map
        