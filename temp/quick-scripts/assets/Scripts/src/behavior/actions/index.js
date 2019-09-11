(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/actions/index.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '91519EyN6dCGbixAUN/f8eu', 'index', __filename);
// Scripts/src/behavior/actions/index.js

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Error = require('./Error');

Object.defineProperty(exports, 'Error', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Error).default;
  }
});

var _Failer = require('./Failer');

Object.defineProperty(exports, 'Failer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Failer).default;
  }
});

var _Runner = require('./Runner');

Object.defineProperty(exports, 'Runner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Runner).default;
  }
});

var _Succeeder = require('./Succeeder');

Object.defineProperty(exports, 'Succeeder', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Succeeder).default;
  }
});

var _Wait = require('./Wait');

Object.defineProperty(exports, 'Wait', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Wait).default;
  }
});

var _Sleep = require('./Sleep');

Object.defineProperty(exports, 'Sleep', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sleep).default;
  }
});

var _Boarding = require('./Boarding');

Object.defineProperty(exports, 'Boarding', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Boarding).default;
  }
});

var _goToSchool = require('./goToSchool');

Object.defineProperty(exports, 'goToSchool', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_goToSchool).default;
  }
});

var _NotAward = require('./NotAward');

Object.defineProperty(exports, 'NotAward', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NotAward).default;
  }
});

var _Receive = require('./Receive');

Object.defineProperty(exports, 'Receive', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Receive).default;
  }
});

var _Move = require('./Move');

Object.defineProperty(exports, 'Move', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Move).default;
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
        