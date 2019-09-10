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

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.speed_x = 1;
        this.speed_y = 1;
        let self = this;
        let fsm = this.fsm = new StateMachine({
            init: 'mvStop',
            transitions: [
              { name: 'right',  from: ['mvUp','mvStop'],       to: 'mvRight'   },
              { name: 'left',   from: ['mvUp','mvStop'],       to: 'mvLeft'    },
              { name: 'up',     from: ['mvRight','mvStop'],    to: 'mvUp'      },
              { name: 'down',   from: ['mvRight','mvStop'],    to: 'mvDown'    },
              { name: 'right',  from: ['mvDown','mvStop'],     to: 'mvRight'   },
              { name: 'left',   from: ['mvDown','mvStop'],     to: 'mvLeft'    },
              { name: 'up',     from: ['mvLeft','mvStop'],     to: 'mvUp'      },
              { name: 'down',   from: ['mvLeft','mvStop'],     to: 'mvDown'    },
              { name: 'stop',   from: '*',                     to: 'mvStop'    },
            ],
            methods: {
              onMvUp: function() { console.log('this is mv up'); self.moveUp()},
              onMvRight: function() { console.log('this is mv right');self.moveRight()},
              onMvDown: function() { console.log('this is mv down');self.moveDown()},
              onMvLeft: function() { console.log('this is mv left');self.moveLeft()},
              onMvStop: function() { console.log('this is mv stop');self.moveStop()}
            }
        });
        cc.log(`当前转态：${fsm.state}`);
    },

    start () {

    },

    moveUp(){
        this.speed_y = 1;
        this.speed_x = 0;
    },
    moveDown(){
        this.speed_y = -1;
        this.speed_x = 0;
    },
    moveRight(){
        this.speed_x = 1;
        this.speed_y = 0;
    },
    moveLeft(){
        this.speed_x = -1;
        this.speed_y = 0;
    },
    moveStop(){
        this.speed_x = 0;
        this.speed_y = 0;
    },

    stop(){
        try {
            this.fsm.stop();
        } catch (error) {
            console.log("不能转换状态");
        }
    },

    up(){
        try {
            this.fsm.up();  
        } catch (error) {
            console.log("不能转换");
        }
    },
    down(){
        try {
            this.fsm.down();
        } catch (error) {
            console.log("不能转换");
        }
    },
    right(){
        try {
            this.fsm.right();            
        } catch (error) {
            console.log("不能转换");
        }
    },
    left(){
        try {
            this.fsm.left(); 
        } catch (error) {
            console.log("不能转换"); 
        }
    },
    update (dt) {
        this.node.x = this.node.x + this.speed_x;
        this.node.y = this.node.y + this.speed_y;
    },
});
