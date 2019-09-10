(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/fsm.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2514dQ2lJ1M4pog+xSZ8n/q', 'fsm', __filename);
// fsm.js

'use strict';

var StateMachine = require('state-machine');
var fsm = StateMachine.create({
  initial: 'stop',
  //please select the enter-state here ↓
  events: [
  //{"name":"startup","from":"nope","to":/*enter-state*/},
  { "name": "right", "from": "stop", "to": "moveright" }, { "name": "up", "from": "stop", "to": "moveup" }, { "name": "down", "from": "stop", "to": "movedown" }, { "name": "left", "from": "stop", "to": "moveleft" }, { "name": "down", "from": "moveright", "to": "movedown" }, { "name": "up", "from": "moveright", "to": "moveup" }, { "name": "up", "from": "moveleft", "to": "moveup" }, { "name": "down", "from": "moveleft", "to": "movedown" }, { "name": "stop", "from": "movedown", "to": "stop" }, { "name": "stop", "from": "moveright", "to": "stop" }, { "name": "stop", "from": "moveup", "to": "stop" }, { "name": "stop", "from": "moveleft", "to": "stop" }, { "name": "left", "from": "moveup", "to": "moveleft" }, { "name": "left", "from": "movedown", "to": "moveleft" }, { "name": "right", "from": "moveup", "to": "moveright" }, { "name": "right", "from": "movedown", "to": "moveright" }]
});
fsm.ASYNC = StateMachine.ASYNC;
module.exports = fsm;

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
        //# sourceMappingURL=fsm.js.map
        