(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/src/behavior/b3.functions.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3294fLeHA1GRoU/XJgqfQwT', 'b3.functions', __filename);
// Scripts/src/behavior/b3.functions.ts

/**
 * List of internal and helper functions in Behavior3JS.
 *
 * @module functions
**/
Object.defineProperty(exports, "__esModule", { value: true });
/**
* This function is used to create unique IDs for trees and nodes.
*
* (consult http://www.ietf.org/rfc/rfc4122.txt).
*
* @class createUUID
* @constructor
* @return {String} A unique ID.
**/
function createUUID() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    // bits 12-15 of the time_hi_and_version field to 0010
    s[14] = "4";
    // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
exports.createUUID = createUUID;

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
        //# sourceMappingURL=b3.functions.js.map
        