(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/test/StateMachine.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6534e1eE9pGxZ06lpQP3wuf', 'StateMachine', __filename);
// Scripts/test/StateMachine.js

'use strict';

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.speed_x = 1;
        this.speed_y = 1;
        var self = this;
        var fsm = this.fsm = new StateMachine({
            init: 'mvStop',
            transitions: [{ name: 'right', from: ['mvUp', 'mvStop'], to: 'mvRight' }, { name: 'left', from: ['mvUp', 'mvStop'], to: 'mvLeft' }, { name: 'up', from: ['mvRight', 'mvStop'], to: 'mvUp' }, { name: 'down', from: ['mvRight', 'mvStop'], to: 'mvDown' }, { name: 'right', from: ['mvDown', 'mvStop'], to: 'mvRight' }, { name: 'left', from: ['mvDown', 'mvStop'], to: 'mvLeft' }, { name: 'up', from: ['mvLeft', 'mvStop'], to: 'mvUp' }, { name: 'down', from: ['mvLeft', 'mvStop'], to: 'mvDown' }, { name: 'stop', from: '*', to: 'mvStop' }],
            methods: {
                onMvUp: function onMvUp() {
                    console.log('this is mv up');self.moveUp();
                },
                onMvRight: function onMvRight() {
                    console.log('this is mv right');self.moveRight();
                },
                onMvDown: function onMvDown() {
                    console.log('this is mv down');self.moveDown();
                },
                onMvLeft: function onMvLeft() {
                    console.log('this is mv left');self.moveLeft();
                },
                onMvStop: function onMvStop() {
                    console.log('this is mv stop');self.moveStop();
                }
            }
        });
        cc.log('\u5F53\u524D\u8F6C\u6001\uFF1A' + fsm.state);
    },
    start: function start() {},
    moveUp: function moveUp() {
        this.speed_y = 1;
        this.speed_x = 0;
    },
    moveDown: function moveDown() {
        this.speed_y = -1;
        this.speed_x = 0;
    },
    moveRight: function moveRight() {
        this.speed_x = 1;
        this.speed_y = 0;
    },
    moveLeft: function moveLeft() {
        this.speed_x = -1;
        this.speed_y = 0;
    },
    moveStop: function moveStop() {
        this.speed_x = 0;
        this.speed_y = 0;
    },
    stop: function stop() {
        try {
            this.fsm.stop();
        } catch (error) {
            console.log("不能转换状态");
        }
    },
    up: function up() {
        try {
            this.fsm.up();
        } catch (error) {
            console.log("不能转换");
        }
    },
    down: function down() {
        try {
            this.fsm.down();
        } catch (error) {
            console.log("不能转换");
        }
    },
    right: function right() {
        try {
            this.fsm.right();
        } catch (error) {
            console.log("不能转换");
        }
    },
    left: function left() {
        try {
            this.fsm.left();
        } catch (error) {
            console.log("不能转换");
        }
    },
    update: function update(dt) {
        this.node.x = this.node.x + this.speed_x;
        this.node.y = this.node.y + this.speed_y;
    }
});

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
        //# sourceMappingURL=StateMachine.js.map
        