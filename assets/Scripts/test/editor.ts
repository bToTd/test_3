// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MyEditor extends cc.Component {

   constructor(){
       super();
       require('electron').ipcRenderer.on('scene:enter-prefab-edit-mode', function(event, args) {
           cc.log("在构造函数中 ipcRenderer 中监听到这个消息");
           cc.log(event);
           cc.log(args);
       });
   }

   onLoad(){
        require('electron').ipcRenderer.on('scene:enter-prefab-edit-mode', function(event, args) {
            cc.log("在 onLoad 函数中 ipcRenderer 中监听到这个消息");
            cc.log(event);
            cc.log(args);
        });
        // require('electron').ipcMain.on('scene:enter-prefab-edit-mode', function(event, args) {
        // cc.log("在 ipcMain 中监听到这个消息");
        // cc.log(event);
        // cc.log(args);
        // });
   }

    // update (dt) {}
}
