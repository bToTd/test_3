(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/decorators/Repeater.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '1119ac8vm5AjYmzwEx/Slg5', 'Repeater', __filename);
// Scripts/src/behavior/decorators/Repeater.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Decorator_1 = require("../core/Decorator");
var constants_1 = require("../constants");
/**
 * Repeater is a decorator that repeats the tick signal until the child node
 * return `RUNNING` or `ERROR`. Optionally, a maximum number of repetitions
 * can be defined.
 *
 * @module b3
 * @class Repeater
 * @extends Decorator
 **/
var Repeater = /** @class */ (function (_super) {
    __extends(Repeater, _super);
    /**
     * Creates an instance of MaxTime.
     *
     * - **maxLoop** (*Integer*) Maximum number of repetitions. Default to -1 (infinite).
     * - **child** (*BaseNode*) The child node.
     *
     * @param {Object} params Object with parameters.
     * @param {Number} params.maxLoop Maximum number of repetitions. Default to -1 (infinite).
     * @param {BaseNode} params.child The child node.
     * @memberof Repeater
     **/
    function Repeater() {
        var _this = this;
        var data = {
            name: 'Repeater',
            title: 'Repeat <maxLoop>x'
        };
        _this = _super.call(this, data) || this;
        return _this;
    }
    /**
     * Open method.
     * @method open
     * @param {Tick} tick A tick instance.
     **/
    Repeater.prototype.open = function (tick) {
        tick.blackboard.set('i', 0, tick.tree.id, this.id);
    };
    /**
     * Tick method.
     * @method tick
     * @param {Tick} tick A tick instance.
     **/
    Repeater.prototype.tick = function (tick) {
        if (!this.child) {
            return constants_1.ERROR;
        }
        var i = tick.blackboard.get('i', tick.tree.id, this.id);
        var status = constants_1.SUCCESS;
        while (this.properties.maxLoop < 0 || i < this.properties.maxLoop) {
            // @ts-ignore
            status = this.child._execute(tick);
            if (status == constants_1.SUCCESS || status == constants_1.FAILURE) {
                i++;
            }
            else {
                break;
            }
        }
        tick.blackboard.set('i', i, tick.tree.id, this.id);
        return status;
    };
    return Repeater;
}(Decorator_1.default));
exports.default = Repeater;
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
        //# sourceMappingURL=Repeater.js.map
        