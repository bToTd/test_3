'use strict';

module.exports = {
  load () {
    // execute when package loaded
  },

  unload () {
    // execute when package unloaded
  },

  // register your ipc messages here
  messages: {
    // 'open' () {
    //   // open entry panel registered in package.json
    //   Editor.Panel.open('listend');
    // },
    // 'say-hello' () {
    //   Editor.log('Hello World!');
    //   // send ipc message to panel
    //   Editor.Ipc.sendToPanel('listend', 'listend:hello');
    // },
    // 'clicked' () {
    //   Editor.log('Button clicked!');
    // },
    // "scene:saved" (event, args) {
    //   Editor.log("场景保存了");
    //   Editor.log(event);
    //   Editor.log(args);
    // },
    // "asset-db:asset-changed" (event, args, others) {
    //   Editor.log("文件改变");
    //   Editor.log(event);
    //   Editor.log(args);
    //   Editor.log(others);
    // },
    // "scene:enter-prefab-edit-mode" (event, args){
    //   Editor.log("进入prefab 编辑状态");
    //   Editor.log(event);
    //   Editor.log(args);
    }
  },
};