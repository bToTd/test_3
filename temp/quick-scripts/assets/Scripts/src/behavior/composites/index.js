(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/composites/index.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fdf53PBfd5JDJGRMgrLh7XY', 'index', __filename);
// Scripts/src/behavior/composites/index.js

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MemPriority = require('./MemPriority');

Object.defineProperty(exports, 'MemPriority', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MemPriority).default;
  }
});

var _MemSequence = require('./MemSequence');

Object.defineProperty(exports, 'MemSequence', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MemSequence).default;
  }
});

var _Priority = require('./Priority');

Object.defineProperty(exports, 'Priority', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Priority).default;
  }
});

var _Sequence = require('./Sequence');

Object.defineProperty(exports, 'Sequence', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sequence).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        //# sourceMappingURL=index.js.map
        