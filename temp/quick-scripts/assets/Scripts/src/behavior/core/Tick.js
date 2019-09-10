(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/core/Tick.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '30eace5Kw1J2qrwoCI+6VqY', 'Tick', __filename);
// Scripts/src/behavior/core/Tick.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A new Tick object is instantiated every tick by BehaviorTree. It is passed
 * as parameter to the nodes through the tree during the traversal.
 *
 * The role of the Tick class is to store the instances of tree, debug,
 * target and blackboard. So, all nodes can access these informations.
 *
 * For internal uses, the Tick also is useful to store the open node after
 * the tick signal, in order to let `BehaviorTree` to keep track and close
 * them when necessary.
 *
 * This class also makes a bridge between nodes and the debug, passing the
 * node state to the debug if the last is provided.
 *
 * @module b3
 * @class Tick
 **/
var Tick = /** @class */ (function () {
    /**
     * Initialization method.
     * @method initialize
     * @constructor
     **/
    function Tick() {
        // set by BehaviorTree
        /**
         * The tree reference.
         * @property {b3.BehaviorTree} tree
         * @readOnly
         **/
        this.tree = null;
        /**
         * The debug reference.
         * @property {Object} debug
         * @readOnly
         */
        this.debug = null;
        /**
         * The target object reference.
         * @property {Object} target
         * @readOnly
         **/
        this.target = null;
        /**
         * The blackboard reference.
         * @property {b3.Blackboard} blackboard
         * @readOnly
         **/
        this.blackboard = null;
        // updated during the tick signal
        /**
         * The list of open nodes. Update during the tree traversal.
         * @property {Array} _openNodes
         * @protected
         * @readOnly
         **/
        this._openNodes = [];
        /**
         * The number of nodes entered during the tick. Update during the tree
         * traversal.
         *
         * @property {Integer} _nodeCount
         * @protected
         * @readOnly
         **/
        this._nodeCount = 0;
    }
    /**
     * Called when entering a node (called by BaseNode).
     * @method _enterNode
     * @param {Object} node The node that called this method.
     * @protected
     **/
    Tick.prototype._enterNode = function (node) {
        this._nodeCount++;
        this._openNodes.push(node);
        // TODO: call debug here
    };
    /**
     * Callback when opening a node (called by BaseNode).
     * @method _openNode
     * @param {Object} node The node that called this method.
     * @protected
     **/
    Tick.prototype._openNode = function (node) {
        // TODO: call debug here
    };
    /**
     * Callback when ticking a node (called by BaseNode).
     * @method _tickNode
     * @param {Object} node The node that called this method.
     * @protected
     **/
    Tick.prototype._tickNode = function (node) {
        // TODO: call debug here
    };
    /**
     * Callback when closing a node (called by BaseNode).
     * @method _closeNode
     * @param {Object} node The node that called this method.
     * @protected
     **/
    Tick.prototype._closeNode = function (node) {
        // TODO: call debug here
        this._openNodes.pop();
    };
    /**
     * Callback when exiting a node (called by BaseNode).
     * @method _exitNode
     * @param {Object} node The node that called this method.
     * @protected
     **/
    Tick.prototype._exitNode = function (node) {
        // TODO: call debug here
    };
    return Tick;
}());
exports.default = Tick;
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
        //# sourceMappingURL=Tick.js.map
        