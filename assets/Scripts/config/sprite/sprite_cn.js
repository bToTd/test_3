
/** 
* language字段,数组类型包括的多语言数量,例如    "language": ["cn", "en"],
* imgPath字段,图片的路径,key为图片的唯一LocalKey,value为图片的路径,如为图集中的图片,路径应写为"..../图集名.plist:图片名.png
* */
let sprite_cn = {

"language": [
    "cn",
    "en"
],
"imgPath": {
    "test_img1": "test/img/texture_cn/achiecement_tabbtn_1.png",

    "test_img2": "test/img/texture_cn/achiecement_tabbtn_2.png",

    "test_img3": "test/img/texture_cn/achievement_icon_101.png",

    "test_atlas_img1": "test/img/texture_cn/testImg.plist:achiecement_tabbtn_1.png",

    "test_atlas_img2": "test/img/texture_cn/testImg.plist:achievement_icon_101.png",

}

}
module.exports = sprite_cn;
        