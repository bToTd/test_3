(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/BehaviorTree.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0463d76fchMbqvThsVWkfNi', 'BehaviorTree', __filename);
// BehaviorTree.js

'use strict';

//Don't modify this if you want to re-modify the behaviortree in the future
//#########################################{"class":"go.TreeModel","nodeDataArray":[{"catagory":"Composite","color":"lightgreen","key":-1,"loc":"104 165","name":"Root","parameter":"{}","src":"icon/root.svg","textEditable":false,"type":"Root"},{"catagory":"Action","color":"lightcoral","key":-2,"loc":"217 134","name":"wark","parameter":"{}","parent":-1,"src":"icon/customaction.svg","textEditable":true,"type":"Action"}]}#############################################


cc.Class({
    extends: cc.Component,
    editor: {
        inspector: 'packages://behaviortree-editor/bt-inspector.js'
    },
    properties: {},
    onLoad: function onLoad() {
        var b3 = require('b3core.0.1.0module');
        var self = this.node;
        var wark = b3.Class(b3.Action);
        wark.prototype.name = 'wark';
        wark.prototype.__Action_initialize = wark.prototype.initialize;
        wark.prototype.initialize = function (settings) {
            settings = settings || {};
            this.__Action_initialize();
            this.parameter = settings.parameter;
        };
        wark.prototype.enter = function (tick) {
            console.log('test enter');
            return;
        };
        wark.prototype.open = function (tick) {
            console.log('test open');
            return;
        };
        wark.prototype.tick = function (tick) {
            console.log('test tick');
            return;
        };
        wark.prototype.close = function (tick) {
            console.log('test close');
            return;
        };
        wark.prototype.exit = function (tick) {
            console.log('test exit');
            return;
        };
        var tree = new b3.BehaviorTree();
        tree.root = new b3.Sequence({ parameter: {}, children: [new wark({ parameter: {} })] });
        this.tree = tree;
        this.blackboard = new b3.Blackboard();
        this.b3 = b3;
    },
    tick: function tick(target) {
        var t = {};
        if (target != undefined) {
            t = target;
        }
        this.tree.tick(t, this.blackboard);
    } });

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
        //# sourceMappingURL=BehaviorTree.js.map
        