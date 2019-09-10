(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/test/testStM.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '152ddNsI+FFYpJRepAIY6pP', 'testStM', __filename);
// Scripts/test/testStM.ts

Object.defineProperty(exports, "__esModule", { value: true });
var StateManager_1 = require("../src/StateManager");
var newState_1 = require("../config/newState");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TestStM = /** @class */ (function (_super) {
    __extends(TestStM, _super);
    function TestStM() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SM_1 = new StateManager_1.StateManager();
        _this._state = newState_1.data.state["-2"];
        return _this;
    }
    TestStM.prototype.onLoad = function () {
        console.log(newState_1.data);
        this.SM_1.loadStateFromJosn(newState_1.data);
        this.SM_1.registeredActionForState(newState_1.data.state["-2"], function () { console.log("running"); });
        this.SM_1.registeredActionForState(newState_1.data.state["-3"], function () { console.log("wait"); });
        this.SM_1.registeredActionForState(newState_1.data.state["-4"], function () { console.log("stop"); });
    };
    TestStM.prototype.start = function () {
    };
    TestStM = __decorate([
        ccclass
    ], TestStM);
    return TestStM;
}(cc.Component));
exports.default = TestStM;
;

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
        //# sourceMappingURL=testStM.js.map
        