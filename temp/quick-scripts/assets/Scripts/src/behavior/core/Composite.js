(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/core/Composite.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2faa6HYintI1rzzi1PMTnXo', 'Composite', __filename);
// Scripts/src/behavior/core/Composite.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseNode_1 = require("./BaseNode");
/**
 * Composite is the base class for all composite nodes. Thus, if you want to
 * create new custom composite nodes, you need to inherit from this class.
 *
 * When creating composite nodes, you will need to propagate the tick signal
 * to the children nodes manually. To do that, override the `tick` method and
 * call the `_execute` method on all nodes. For instance, take a look at how
 * the Sequence node inherit this class and how it call its children:
 *
 *     // Inherit from Composite, using the util function Class.
 *     class Sequence extends Composite {
 *
 *       constructor(){
 *         // Remember to set the name of the node.
 *         super({name: 'Sequence'});
 *       }
 *
 *       // Override the tick function
 *       tick(tick) {
 *
 *         // Iterates over the children
 *         for (var i=0; i<this.children.length; i++) {
 *
 *           // Propagate the tick
 *           var status = this.children[i]._execute(tick);
 *
 *           if (status !== SUCCESS) {
 *               return status;
 *           }
 *         }
 *
 *         return SUCCESS;
 *       }
 *     };
 *
 * @module b3
 * @class Composite
 * @extends BaseNode
 **/
var Composite = /** @class */ (function (_super) {
    __extends(Composite, _super);
    /**
     * Creates an instance of Composite.
     * @param {Object} options
     * @param {BaseNode[]} options.children
     * @param {String} options.name Node name. Default to `Composite`.
     * @param {String} options.title
     * @param {Object} options.properties
     * @memberof Composite
     */
    function Composite(data) {
        var _this = this;
        data.category = 'composite'; // COMPOSITE ||
        _this = _super.call(this, data) || this;
        if (!data.children) {
            _this.children = [];
            return;
        }
        _this.children = (data.children).slice(0);
        return _this;
    }
    return Composite;
}(BaseNode_1.default));
exports.default = Composite;
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
        //# sourceMappingURL=Composite.js.map
        