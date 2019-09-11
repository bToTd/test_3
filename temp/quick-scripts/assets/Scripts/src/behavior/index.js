(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/index.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'dab7b2yUOJL44dJwc5e9tRF', 'index', __filename);
// Scripts/src/behavior/index.ts

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./constants"));
var b3_functions_1 = require("./b3.functions");
exports.createUUID = b3_functions_1.createUUID;
var Error_1 = require("./actions/Error");
exports.Error = Error_1.default;
var Failer_1 = require("./actions/Failer");
exports.Failer = Failer_1.default;
var Runner_1 = require("./actions/Runner");
exports.Runner = Runner_1.default;
var Succeeder_1 = require("./actions/Succeeder");
exports.Succeeder = Succeeder_1.default;
var Wait_1 = require("./actions/Wait");
exports.Wait = Wait_1.default;
var MemPriority_1 = require("./composites/MemPriority");
exports.MemPriority = MemPriority_1.default;
var MemSequence_1 = require("./composites/MemSequence");
exports.MemSequence = MemSequence_1.default;
var Priority_1 = require("./composites/Priority");
exports.Priority = Priority_1.default;
var Sequence_1 = require("./composites/Sequence");
exports.Sequence = Sequence_1.default;
var Action_1 = require("./core/Action");
exports.Action = Action_1.default;
var BaseNode_1 = require("./core/BaseNode");
exports.BaseNode = BaseNode_1.default;
var BehaviorTree_1 = require("./core/BehaviorTree");
exports.BehaviorTree = BehaviorTree_1.default;
var Blackboard_1 = require("./core/Blackboard");
exports.Blackboard = Blackboard_1.default;
var Composite_1 = require("./core/Composite");
exports.Composite = Composite_1.default;
var Condition_1 = require("./core/Condition");
exports.Condition = Condition_1.default;
var Decorator_1 = require("./core/Decorator");
exports.Decorator = Decorator_1.default;
var Tick_1 = require("./core/Tick");
exports.Tick = Tick_1.default;
var Inverter_1 = require("./decorators/Inverter");
exports.Inverter = Inverter_1.default;
var Limiter_1 = require("./decorators/Limiter");
exports.Limiter = Limiter_1.default;
var MaxTime_1 = require("./decorators/MaxTime");
exports.MaxTime = MaxTime_1.default;
var RepeatUntilFailure_1 = require("./decorators/RepeatUntilFailure");
exports.RepeatUntilFailure = RepeatUntilFailure_1.default;
var RepeatUntilSuccess_1 = require("./decorators/RepeatUntilSuccess");
exports.RepeatUntilSuccess = RepeatUntilSuccess_1.default;
var Repeater_1 = require("./decorators/Repeater");
exports.Repeater = Repeater_1.default;

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
        