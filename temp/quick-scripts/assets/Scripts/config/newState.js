(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/config/newState.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ae879mTr2RCaJTkrKK582p+', 'newState', __filename);
// Scripts/config/newState.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.data = {
    "state": {
        "-2": "running",
        "-3": "wait",
        "-4": "stop"
    },
    "translations": [
        {
            "translation": "w",
            "from": "stop",
            "to": "wait"
        },
        {
            "translation": "r",
            "from": "wait",
            "to": "running"
        },
        {
            "translation": "s",
            "from": "running",
            "to": "stop"
        }
    ]
};

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
        //# sourceMappingURL=newState.js.map
        