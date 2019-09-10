(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/config/sprite/sprite_cn.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8a93cvXVBlNx4ll8EqcaxVf', 'sprite_cn', __filename);
// Scripts/config/sprite/sprite_cn.js

"use strict";

/** 
* language字段,数组类型包括的多语言数量,例如    "language": ["cn", "en"],
* imgPath字段,图片的路径,key为图片的唯一LocalKey,value为图片的路径,如为图集中的图片,路径应写为"..../图集名.plist:图片名.png
* */
var sprite_cn = {

    "language": ["cn", "en"],
    "imgPath": {
        "test_img1": "test/img/texture_cn/achiecement_tabbtn_1.png",

        "test_img2": "test/img/texture_cn/achiecement_tabbtn_2.png",

        "test_img3": "test/img/texture_cn/achievement_icon_101.png",

        "test_atlas_img1": "test/img/texture_cn/testImg.plist:achiecement_tabbtn_1.png",

        "test_atlas_img2": "test/img/texture_cn/testImg.plist:achievement_icon_101.png"

    }

};
module.exports = sprite_cn;

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
        //# sourceMappingURL=sprite_cn.js.map
        