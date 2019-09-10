(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/core/Decorator.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0953akaMWlPa7QG/vRQSjSp', 'Decorator', __filename);
// Scripts/src/behavior/core/Decorator.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseNode_1 = require("./BaseNode");
/**
 * Decorator is the base class for all decorator nodes. Thus, if you want to
 * create new custom decorator nodes, you need to inherit from this class.
 *
 * When creating decorator nodes, you will need to propagate the tick signal
 * to the child node manually, just like the composite nodes. To do that,
 * override the `tick` method and call the `_execute` method on the child
 * node. For instance, take a look at how the Inverter node inherit this
 * class and how it call its children:
 *
 *     // Inherit from Decorator, using the util function Class.
 *     class Inverter extends b3.Decorator {
 *
 *       constructor(){
 *         super({name: 'Invereter'});
 *       }
 *
 *       tick: function(tick) {
 *         if (!this.child) {
 *           return b3.ERROR;
 *         }
 *
 *         // Propagate the tick
 *         var status = this.child._execute(tick);
 *
 *         if (status === b3.SUCCESS) {
 *           status = b3.FAILURE;
 *         } else if (status === b3.FAILURE) {
 *           status = b3.SUCCESS;
 *         }
 *
 *         return status;
 *       }
 *     });
 *
 * @module b3
 * @class Decorator
 * @extends BaseNode
 **/
var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    /**
     * Creates an instance of Decorator.
     * @param {Object} options
     * @param {String} options.name Node name. Default to `Decorator`.
     * @param {String} options.title
     * @param {Object} options.properties
     * @memberof Decorator
     */
    function Decorator(data) {
        var _this = this;
        data.category = 'decorator'; // DECORATOR
        _this = _super.call(this, data) || this;
        _this.child = data.child;
        return _this;
    }
    return Decorator;
}(BaseNode_1.default));
exports.default = Decorator;
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
        //# sourceMappingURL=Decorator.js.map
        