(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/config/awardTree.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '36b0djvUdNFfZLTfB7RNCSX', 'awardTree', __filename);
// Scripts/config/awardTree.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.data = {
    "version": "0.3.0",
    "scope": "tree",
    "id": "bf5cba44-f630-4fb2-b1cd-ee3927f82026",
    "title": "UI",
    "description": "",
    "root": "fd410011-f3d3-4716-902f-74966b05c50d",
    "properties": {},
    "nodes": {
        "a1a61f52-d74e-45a8-8029-9338f21bffdf": {
            "id": "a1a61f52-d74e-45a8-8029-9338f21bffdf",
            "name": "Priority",
            "title": "Priority",
            "description": "领取奖励",
            "properties": {},
            "display": {
                "x": -600,
                "y": -132
            },
            "children": [
                "7d22e4f8-044a-49ef-8621-1a2d714605bb",
                "e662584f-86ed-4761-adc0-80974af5cefb",
                "1b87f2ea-8070-4cfc-8e12-788edb3660e4",
                "9f85ba2c-f4c0-4806-827b-e5e99901828b",
                "4faf797d-c14e-4cb6-822f-8053e0a7da1f",
                "d04a0553-3202-4dda-82c1-3b116ec80f50"
            ]
        },
        "7d22e4f8-044a-49ef-8621-1a2d714605bb": {
            "id": "7d22e4f8-044a-49ef-8621-1a2d714605bb",
            "name": "Sequence",
            "title": "Sequence",
            "description": "1 级奖励",
            "properties": {
                "level": 1
            },
            "display": {
                "x": -396,
                "y": -480
            },
            "children": [
                "574d06f5-eee8-4d4f-b45d-71fa5382d43f",
                "1e485d3f-f231-44f7-87b0-7a189c5f998c",
                "d1b5cae5-ccf5-4f3c-8950-9cf4772b5e58"
            ]
        },
        "574d06f5-eee8-4d4f-b45d-71fa5382d43f": {
            "id": "574d06f5-eee8-4d4f-b45d-71fa5382d43f",
            "name": "CanReceive",
            "title": "CanReceive",
            "description": "判断是否可以领取",
            "properties": {
                "ReceivingCondition": 10
            },
            "display": {
                "x": -216,
                "y": -552
            }
        },
        "d1b5cae5-ccf5-4f3c-8950-9cf4772b5e58": {
            "id": "d1b5cae5-ccf5-4f3c-8950-9cf4772b5e58",
            "name": "Receive",
            "title": "Receive",
            "description": "领取奖励",
            "properties": {
                "level": 1
            },
            "display": {
                "x": -216,
                "y": -420
            }
        },
        "e662584f-86ed-4761-adc0-80974af5cefb": {
            "id": "e662584f-86ed-4761-adc0-80974af5cefb",
            "name": "Sequence",
            "title": "Sequence",
            "description": "",
            "properties": {},
            "display": {
                "x": -396,
                "y": -276
            },
            "children": [
                "69b3f76d-c7ad-4eea-89fc-952e0ba585d1",
                "bf1939e3-081f-4425-a255-49d9074d277f",
                "d3ec3cb6-b2ff-4052-89bb-7e5cc51f6d26"
            ]
        },
        "69b3f76d-c7ad-4eea-89fc-952e0ba585d1": {
            "id": "69b3f76d-c7ad-4eea-89fc-952e0ba585d1",
            "name": "CanReceive",
            "title": "CanReceive",
            "description": "判断是否可以领取",
            "properties": {
                "ReceivingCondition": 20
            },
            "display": {
                "x": -216,
                "y": -348
            }
        },
        "d3ec3cb6-b2ff-4052-89bb-7e5cc51f6d26": {
            "id": "d3ec3cb6-b2ff-4052-89bb-7e5cc51f6d26",
            "name": "Receive",
            "title": "Receive",
            "description": "领取奖励",
            "properties": {
                "level": 2
            },
            "display": {
                "x": -216,
                "y": -216
            }
        },
        "1b87f2ea-8070-4cfc-8e12-788edb3660e4": {
            "id": "1b87f2ea-8070-4cfc-8e12-788edb3660e4",
            "name": "Sequence",
            "title": "Sequence",
            "description": "",
            "properties": {},
            "display": {
                "x": -396,
                "y": -84
            },
            "children": [
                "0d4dcddc-4baf-493d-9832-46a4328f5cd9",
                "e1e9aa81-0589-4986-9dfa-a220c26988ec",
                "eae4ab1e-cda6-4f4a-86ea-16dab82f495c"
            ]
        },
        "0d4dcddc-4baf-493d-9832-46a4328f5cd9": {
            "id": "0d4dcddc-4baf-493d-9832-46a4328f5cd9",
            "name": "CanReceive",
            "title": "CanReceive",
            "description": "判断是否可以领取",
            "properties": {
                "ReceivingCondition": 30
            },
            "display": {
                "x": -216,
                "y": -144
            }
        },
        "eae4ab1e-cda6-4f4a-86ea-16dab82f495c": {
            "id": "eae4ab1e-cda6-4f4a-86ea-16dab82f495c",
            "name": "Receive",
            "title": "Receive",
            "description": "领取奖励",
            "properties": {
                "level": 3
            },
            "display": {
                "x": -216,
                "y": -24
            }
        },
        "1e485d3f-f231-44f7-87b0-7a189c5f998c": {
            "id": "1e485d3f-f231-44f7-87b0-7a189c5f998c",
            "name": "Inverter",
            "title": "Inverter",
            "description": "",
            "properties": {},
            "display": {
                "x": -228,
                "y": -480
            },
            "child": "d4a81ab8-9b75-4647-8eb8-33ffb30a51fd"
        },
        "d4a81ab8-9b75-4647-8eb8-33ffb30a51fd": {
            "id": "d4a81ab8-9b75-4647-8eb8-33ffb30a51fd",
            "name": "HasReceived",
            "title": "HasReceived",
            "description": "判读是否领取过本次奖励",
            "properties": {
                "level": 1
            },
            "display": {
                "x": -36,
                "y": -480
            }
        },
        "bf1939e3-081f-4425-a255-49d9074d277f": {
            "id": "bf1939e3-081f-4425-a255-49d9074d277f",
            "name": "Inverter",
            "title": "Inverter",
            "description": "",
            "properties": {},
            "display": {
                "x": -228,
                "y": -276
            },
            "child": "42efba73-b3bd-482b-8dce-74171922c30e"
        },
        "42efba73-b3bd-482b-8dce-74171922c30e": {
            "id": "42efba73-b3bd-482b-8dce-74171922c30e",
            "name": "HasReceived",
            "title": "HasReceived",
            "description": "判读是否领取过本次奖励",
            "properties": {
                "level": 2
            },
            "display": {
                "x": -36,
                "y": -276
            }
        },
        "e1e9aa81-0589-4986-9dfa-a220c26988ec": {
            "id": "e1e9aa81-0589-4986-9dfa-a220c26988ec",
            "name": "Inverter",
            "title": "Inverter",
            "description": "",
            "properties": {},
            "display": {
                "x": -228,
                "y": -84
            },
            "child": "cd9de9e4-de49-4fd8-adba-99d8cd0ed19d"
        },
        "cd9de9e4-de49-4fd8-adba-99d8cd0ed19d": {
            "id": "cd9de9e4-de49-4fd8-adba-99d8cd0ed19d",
            "name": "HasReceived",
            "title": "HasReceived",
            "description": "判读是否领取过本次奖励",
            "properties": {
                "level": 3
            },
            "display": {
                "x": -24,
                "y": -84
            }
        },
        "d04a0553-3202-4dda-82c1-3b116ec80f50": {
            "id": "d04a0553-3202-4dda-82c1-3b116ec80f50",
            "name": "NotAward",
            "title": "NotAward",
            "description": "没有可以领取的奖励",
            "properties": {},
            "display": {
                "x": -312,
                "y": 384
            }
        },
        "9f85ba2c-f4c0-4806-827b-e5e99901828b": {
            "id": "9f85ba2c-f4c0-4806-827b-e5e99901828b",
            "name": "Sequence",
            "title": "Sequence",
            "description": "",
            "properties": {},
            "display": {
                "x": -396,
                "y": 84
            },
            "children": [
                "22e24ef9-8ce7-4c7a-9089-d83c569fb5a7",
                "c26f0b3b-b9b5-4c36-867e-fd7180b047ca",
                "7478c5f4-44a5-401d-9fde-fc8b2a0cc690"
            ]
        },
        "22e24ef9-8ce7-4c7a-9089-d83c569fb5a7": {
            "id": "22e24ef9-8ce7-4c7a-9089-d83c569fb5a7",
            "name": "CanReceive",
            "title": "CanReceive",
            "description": "判断是否可以领取",
            "properties": {
                "ReceivingCondition": 40
            },
            "display": {
                "x": -216,
                "y": 24
            }
        },
        "7478c5f4-44a5-401d-9fde-fc8b2a0cc690": {
            "id": "7478c5f4-44a5-401d-9fde-fc8b2a0cc690",
            "name": "Receive",
            "title": "Receive",
            "description": "领取奖励",
            "properties": {
                "level": 4
            },
            "display": {
                "x": -216,
                "y": 144
            }
        },
        "c26f0b3b-b9b5-4c36-867e-fd7180b047ca": {
            "id": "c26f0b3b-b9b5-4c36-867e-fd7180b047ca",
            "name": "Inverter",
            "title": "Inverter",
            "description": "",
            "properties": {},
            "display": {
                "x": -228,
                "y": 84
            },
            "child": "77b407f1-7913-4649-8093-25237fb788ba"
        },
        "77b407f1-7913-4649-8093-25237fb788ba": {
            "id": "77b407f1-7913-4649-8093-25237fb788ba",
            "name": "HasReceived",
            "title": "HasReceived",
            "description": "判读是否领取过本次奖励",
            "properties": {
                "level": 4
            },
            "display": {
                "x": -24,
                "y": 84
            }
        },
        "4faf797d-c14e-4cb6-822f-8053e0a7da1f": {
            "id": "4faf797d-c14e-4cb6-822f-8053e0a7da1f",
            "name": "Sequence",
            "title": "Sequence",
            "description": "",
            "properties": {},
            "display": {
                "x": -396,
                "y": 252
            },
            "children": [
                "a11aaffc-b3f4-4667-80b9-13b48ccb871a",
                "3d299bab-f230-4275-a651-81bbfabcd260",
                "a0f7fbf4-b0cb-4716-a269-e4744b718fe7"
            ]
        },
        "a11aaffc-b3f4-4667-80b9-13b48ccb871a": {
            "id": "a11aaffc-b3f4-4667-80b9-13b48ccb871a",
            "name": "CanReceive",
            "title": "CanReceive",
            "description": "判断是否可以领取",
            "properties": {
                "ReceivingCondition": 50
            },
            "display": {
                "x": -216,
                "y": 192
            }
        },
        "a0f7fbf4-b0cb-4716-a269-e4744b718fe7": {
            "id": "a0f7fbf4-b0cb-4716-a269-e4744b718fe7",
            "name": "Receive",
            "title": "Receive",
            "description": "领取奖励",
            "properties": {
                "level": 5
            },
            "display": {
                "x": -216,
                "y": 312
            }
        },
        "3d299bab-f230-4275-a651-81bbfabcd260": {
            "id": "3d299bab-f230-4275-a651-81bbfabcd260",
            "name": "Inverter",
            "title": "Inverter",
            "description": "",
            "properties": {},
            "display": {
                "x": -228,
                "y": 252
            },
            "child": "f7013139-88bd-445e-aeb7-0ba7cd210b7f"
        },
        "f7013139-88bd-445e-aeb7-0ba7cd210b7f": {
            "id": "f7013139-88bd-445e-aeb7-0ba7cd210b7f",
            "name": "HasReceived",
            "title": "HasReceived",
            "description": "判读是否领取过本次奖励",
            "properties": {
                "level": 5
            },
            "display": {
                "x": -24,
                "y": 252
            }
        },
        "fd410011-f3d3-4716-902f-74966b05c50d": {
            "id": "fd410011-f3d3-4716-902f-74966b05c50d",
            "name": "Repeater",
            "title": "Repeat <maxLoop>x",
            "description": "",
            "properties": {
                "maxLoop": 1
            },
            "display": {
                "x": -744,
                "y": -132
            },
            "child": "a1a61f52-d74e-45a8-8029-9338f21bffdf"
        }
    },
    "display": {
        "camera_x": 960,
        "camera_y": 489,
        "camera_z": 0.75,
        "x": -888,
        "y": -132
    },
    "custom_nodes": [
        {
            "version": "0.3.0",
            "scope": "node",
            "name": "CanReceive",
            "category": "condition",
            "title": "CanReceive",
            "description": "判断是否可以领取",
            "properties": {}
        },
        {
            "version": "0.3.0",
            "scope": "node",
            "name": "Receive",
            "category": "action",
            "title": "Receive",
            "description": "领取奖励",
            "properties": {}
        },
        {
            "version": "0.3.0",
            "scope": "node",
            "name": "HasReceived",
            "category": "condition",
            "title": "HasReceived",
            "description": "判读是否领取过本次奖励",
            "properties": {}
        },
        {
            "version": "0.3.0",
            "scope": "node",
            "name": "NotAward",
            "category": "action",
            "title": "NotAward",
            "description": "没有可以领取的奖励",
            "properties": {}
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
        //# sourceMappingURL=awardTree.js.map
        