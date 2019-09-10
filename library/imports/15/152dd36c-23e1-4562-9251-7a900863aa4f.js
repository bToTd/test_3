"use strict";
cc._RF.push(module, '152ddNsI+FFYpJRepAIY6pP', 'testStM');
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