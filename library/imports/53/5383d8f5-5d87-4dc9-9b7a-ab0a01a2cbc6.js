"use strict";
cc._RF.push(module, '5383dj1XYdNyZt6qwoBosvG', 'editor');
// Scripts/test/editor.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MyEditor = /** @class */ (function (_super) {
    __extends(MyEditor, _super);
    function MyEditor() {
        var _this = _super.call(this) || this;
        require('electron').ipcRenderer.on('scene:enter-prefab-edit-mode', function (event, args) {
            cc.log("在构造函数中 ipcRenderer 中监听到这个消息");
            cc.log(event);
            cc.log(args);
        });
        return _this;
    }
    MyEditor.prototype.onLoad = function () {
        require('electron').ipcRenderer.on('scene:enter-prefab-edit-mode', function (event, args) {
            cc.log("在 onLoad 函数中 ipcRenderer 中监听到这个消息");
            cc.log(event);
            cc.log(args);
        });
        // require('electron').ipcMain.on('scene:enter-prefab-edit-mode', function(event, args) {
        // cc.log("在 ipcMain 中监听到这个消息");
        // cc.log(event);
        // cc.log(args);
        // });
    };
    MyEditor = __decorate([
        ccclass
    ], MyEditor);
    return MyEditor;
}(cc.Component));
exports.default = MyEditor;

cc._RF.pop();