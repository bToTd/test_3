"use strict";
cc._RF.push(module, 'fec389DaNVKnY9wyWTRiWdD', 'Action');
// Scripts/src/behavior/core/Action.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseNode_1 = require("./BaseNode");
/**
 * Action is the base class for all action nodes. Thus, if you want to create
 * new custom action nodes, you need to inherit from this class. For example,
 * take a look at the Runner action:
 *
 *     class Runner extends b3.Action {
 *       constructor(){
 *         super({name: 'Runner'});
 *       }
 *       tick(tick) {
 *         return b3.RUNNING;
 *       }
 *     };
 *
 * @module b3
 * @class Action
 * @extends BaseNode
 **/
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    /**
     * Creates an instance of Action.
     * @param {Object} options
     * @param {String} options.name Node name. Default to `Action`.
     * @param {String} options.title
     * @param {Object} options.properties
     * @memberof Action
     */
    function Action(data) {
        var _this = this;
        data.category = 'action'; // ACTION
        _this = _super.call(this, data) || this;
        return _this;
    }
    return Action;
}(BaseNode_1.default));
exports.default = Action;
;

cc._RF.pop();