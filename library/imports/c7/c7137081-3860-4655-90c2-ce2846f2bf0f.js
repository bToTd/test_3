"use strict";
cc._RF.push(module, 'c7137CBOGBGVZDCzihG8r8P', 'BehaviorTree');
// Scripts/src/behavior/core/BehaviorTree.ts

Object.defineProperty(exports, "__esModule", { value: true });
var b3_functions_1 = require("../b3.functions");
var constants_1 = require("../constants");
var Decorators = require("../decorators");
var Composites = require("../composites");
var Actions = require("../actions");
var Conditions = require("../conditions");
var Tick_1 = require("./Tick");
var BehaviorTree = /** @class */ (function () {
    /**
     * Initialization method.
     * @method initialize
     * @constructor
     **/
    function BehaviorTree() {
        /**
         * The tree id, must be unique. By default, created with `createUUID`.
         * @property {String} id
         * @readOnly
         **/
        this.id = b3_functions_1.createUUID();
        /**
         * The tree title.
         * @property {String} title
         * @readonly
         **/
        this.title = 'The behavior tree';
        /**
         * Description of the tree.
         * @property {String} description
         * @readonly
         **/
        this.description = 'Default description';
        /**
         * A dictionary with (key-value) properties. Useful to define custom
         * variables in the visual editor.
         *
         * @property {Object} properties
         * @readonly
         **/
        this.properties = {};
        /**
         * The reference to the root node. Must be an instance of `BaseNode`.
         * @property {BaseNode} root
         **/
        this.root = null;
        /**
         * The reference to the debug instance.
         * @property {Object} debug
         **/
        this.debug = null;
    }
    /**
     * This method loads a Behavior Tree from a data structure, populating this
     * object with the provided data. Notice that, the data structure must
     * follow the format specified by Behavior3JS. Consult the guide to know
     * more about this format.
     *
     * You probably want to use custom nodes in your BTs, thus, you need to
     * provide the `names` object, in which this method can find the nodes by
     * `names[NODE_NAME]`. This variable can be a namespace or a dictionary,
     * as long as this method can find the node by its name, for example:
     *
     *     //json
     *     ...
     *     'node1': {
     *       'name': MyCustomNode,
     *       'title': ...
     *     }
     *     ...
     *
     *     //code
     *     var bt = new b3.BehaviorTree();
     *     bt.load(data, {'MyCustomNode':MyCustomNode})
     *
     *
     * @method load
     * @param {Object} data The data structure representing a Behavior Tree.
     * @param {Object} [names] A namespace or dict containing custom nodes.
     **/
    BehaviorTree.prototype.load = function (data, names) {
        names = names || {};
        this.title = data.title || this.title;
        this.description = data.description || this.description;
        this.properties = data.properties || this.properties;
        var nodes = {};
        var id, spec, node;
        // Create the node list (without connection between them)
        for (id in data.nodes) {
            spec = data.nodes[id];
            var Cls;
            if (spec.name in names) {
                // Look for the name in custom nodes
                Cls = names[spec.name];
            }
            else if (spec.name in Decorators) {
                // Look for the name in default nodes
                Cls = Decorators[spec.name];
            }
            else if (spec.name in Composites) {
                Cls = Composites[spec.name];
            }
            else if (spec.name in Actions) {
                Cls = Actions[spec.name];
            }
            else if (spec.name in Conditions) {
                Cls = Conditions[spec.name];
            }
            else {
                // Invalid node name
                throw new EvalError('BehaviorTree.load: Invalid node name + "' +
                    spec.name + '".');
            }
            node = new Cls(spec.properties);
            node.id = spec.id || node.id;
            node.title = spec.title || node.title;
            node.description = spec.description || node.description;
            node.properties = spec.properties || node.properties;
            nodes[id] = node;
        }
        // Connect the nodes
        for (id in data.nodes) {
            spec = data.nodes[id];
            node = nodes[id];
            if (node.category === constants_1.COMPOSITE && spec.children) {
                for (var i = 0; i < spec.children.length; i++) {
                    var cid = spec.children[i];
                    node.children.push(nodes[cid]);
                }
            }
            else if (node.category === constants_1.DECORATOR && spec.child) {
                node.child = nodes[spec.child];
            }
        }
        this.root = nodes[data.root];
    };
    /**
     * This method dump the current BT into a data structure.
     *
     * Note: This method does not record the current node parameters. Thus,
     * it may not be compatible with load for now.
     *
     * @method dump
     * @return {Object} A data object representing this tree.
     **/
    BehaviorTree.prototype.dump = function () {
        var data;
        var customNames = [];
        data.title = this.title;
        data.description = this.description;
        data.root = (this.root) ? this.root.id : null;
        data.properties = this.properties;
        data.nodes = {};
        data.custom_nodes = [];
        if (!this.root)
            return data;
        var stack = [this.root];
        while (stack.length > 0) {
            var node = stack.pop();
            var spec;
            spec.id = node.id;
            spec.name = node.name;
            spec.title = node.title;
            spec.description = node.description;
            spec.properties = node.properties;
            spec.parameters = node.parameters;
            // verify custom node
            var proto = (node.constructor && node.constructor.prototype);
            var nodeName = (proto && proto.name) || node.name;
            if (!Decorators[nodeName] && !Composites[nodeName] && !Actions[nodeName] && customNames.indexOf(nodeName) < 0) {
                var subdata;
                subdata.name = nodeName;
                subdata.title = (proto && proto.title) || node.title;
                subdata.category = node.category;
                customNames.push(nodeName);
                data.custom_nodes.push(subdata);
            }
            // store children/child
            if (node.category === constants_1.COMPOSITE && node.children) {
                var children = [];
                for (var i = node.children.length - 1; i >= 0; i--) {
                    children.push(node.children[i].id);
                    stack.push(node.children[i]);
                }
                spec.children = children;
            }
            else if (node.category === constants_1.DECORATOR && node.child) {
                stack.push(node.child);
                spec.child = node.child.id;
            }
            data.nodes[node.id] = spec;
        }
        return data;
    };
    /**
     * Propagates the tick signal through the tree, starting from the root.
     *
     * This method receives a target object of any type (Object, Array,
     * DOMElement, whatever) and a `Blackboard` instance. The target object has
     * no use at all for all Behavior3JS components, but surely is important
     * for custom nodes. The blackboard instance is used by the tree and nodes
     * to store execution variables (e.g., last node running) and is obligatory
     * to be a `Blackboard` instance (or an object with the same interface).
     *
     * Internally, this method creates a Tick object, which will store the
     * target and the blackboard objects.
     *
     * Note: BehaviorTree stores a list of open nodes from last tick, if these
     * nodes weren't called after the current tick, this method will close them
     * automatically.
     *
     * @method tick
     * @param {Object} target A target object.
     * @param {Blackboard} blackboard An instance of blackboard object.
     * @return {Constant} The tick signal state.
     **/
    BehaviorTree.prototype.tick = function (target, blackboard) {
        if (!blackboard) {
            throw 'The blackboard parameter is obligatory and must be an ' +
                'instance of b3.Blackboard';
        }
        /* CREATE A TICK OBJECT */
        var tick = new Tick_1.default();
        tick.debug = this.debug;
        tick.target = target;
        tick.blackboard = blackboard;
        tick.tree = this;
        /* TICK NODE */
        var state = this.root._execute(tick);
        /* CLOSE NODES FROM LAST TICK, IF NEEDED */
        var lastOpenNodes = blackboard.get('openNodes', this.id);
        var currOpenNodes = tick._openNodes.slice(0);
        // does not close if it is still open in this tick
        var start = 0;
        var i;
        for (i = 0; i < Math.min(lastOpenNodes.length, currOpenNodes.length); i++) {
            start = i + 1;
            if (lastOpenNodes[i] !== currOpenNodes[i]) {
                break;
            }
        }
        // close the nodes
        for (i = lastOpenNodes.length - 1; i >= start; i--) {
            lastOpenNodes[i]._close(tick);
        }
        /* POPULATE BLACKBOARD */
        blackboard.set('openNodes', currOpenNodes, this.id);
        blackboard.set('nodeCount', tick._nodeCount, this.id);
        return state;
    };
    return BehaviorTree;
}());
exports.default = BehaviorTree;
;

cc._RF.pop();