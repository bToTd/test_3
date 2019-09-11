export let data = {
    "version": "0.3.0",
    "scope": "tree",
    "id": "a785b683-d4fb-49cf-89e2-89b17055f12b",
    "title": "RandomMove",
    "description": "随机移动",
    "root": "0216a1f4-62ae-4b0b-b697-41fa6396e88f",
    "properties": {},
    "nodes": {
      "0216a1f4-62ae-4b0b-b697-41fa6396e88f": {
        "id": "0216a1f4-62ae-4b0b-b697-41fa6396e88f",
        "name": "RandomSelectors",
        "title": "RandomSelectors",
        "description": "随机执行一个直接子节点",
        "properties": {},
        "display": {
          "x": -408,
          "y": -96
        },
        "children": [
          "b533a720-7b7d-48cf-b1ea-e37d8c160c56",
          "00ef0b91-d525-4921-9884-357644541920",
          "95d1a8f6-941f-4a49-ad7a-b7adae07a677",
          "1d2f2abe-9e8f-49c3-bd67-e4a10f6a94a4"
        ]
      },
      "95d1a8f6-941f-4a49-ad7a-b7adae07a677": {
        "id": "95d1a8f6-941f-4a49-ad7a-b7adae07a677",
        "name": "Sequence",
        "title": "Sequence",
        "description": "",
        "properties": {},
        "display": {
          "x": -156,
          "y": -48
        },
        "children": [
          "b6380b0f-0b0f-4f37-8153-ce00d926516b",
          "56e33c8e-4c5a-4980-8854-b44851486b0a"
        ]
      },
      "56e33c8e-4c5a-4980-8854-b44851486b0a": {
        "id": "56e33c8e-4c5a-4980-8854-b44851486b0a",
        "name": "Move",
        "title": "Move",
        "description": "走一步",
        "properties": {
          "len": -10,
          "direction": "y"
        },
        "display": {
          "x": 12,
          "y": -24
        }
      },
      "68479848-0b38-4c64-8dee-b703bb6ee4a7": {
        "id": "68479848-0b38-4c64-8dee-b703bb6ee4a7",
        "name": "LessThan",
        "title": "LessThan",
        "description": "输入值是否小于给定值",
        "properties": {
          "value": 1,
          "direction": "y"
        },
        "display": {
          "x": 204,
          "y": -96
        }
      },
      "00ef0b91-d525-4921-9884-357644541920": {
        "id": "00ef0b91-d525-4921-9884-357644541920",
        "name": "Sequence",
        "title": "Sequence",
        "description": "",
        "properties": {},
        "display": {
          "x": -156,
          "y": -180
        },
        "children": [
          "49cd4fdf-fca7-4802-852a-94c31fd9c1b6",
          "ba4b94d6-cc31-4319-a0cb-acefe73e0186"
        ]
      },
      "d9c52db3-9089-4313-8813-f9bbc6331a17": {
        "id": "d9c52db3-9089-4313-8813-f9bbc6331a17",
        "name": "GreaterThan",
        "title": "GreaterThan",
        "description": "输入值是否大于给定值",
        "properties": {
          "value": 199,
          "direction": "x"
        },
        "display": {
          "x": 180,
          "y": -216
        }
      },
      "ba4b94d6-cc31-4319-a0cb-acefe73e0186": {
        "id": "ba4b94d6-cc31-4319-a0cb-acefe73e0186",
        "name": "Move",
        "title": "Move",
        "description": "走一步",
        "properties": {
          "len": 10,
          "direction": "x"
        },
        "display": {
          "x": 0,
          "y": -156
        }
      },
      "b533a720-7b7d-48cf-b1ea-e37d8c160c56": {
        "id": "b533a720-7b7d-48cf-b1ea-e37d8c160c56",
        "name": "Sequence",
        "title": "Sequence",
        "description": "",
        "properties": {},
        "display": {
          "x": -156,
          "y": -312
        },
        "children": [
          "ea64b494-6e1d-402c-892b-cb4cef9425ba",
          "506fb9b8-037d-412b-84a5-e2bc561c887a"
        ]
      },
      "506fb9b8-037d-412b-84a5-e2bc561c887a": {
        "id": "506fb9b8-037d-412b-84a5-e2bc561c887a",
        "name": "Move",
        "title": "Move",
        "description": "走一步",
        "properties": {
          "len": 10,
          "direction": "y"
        },
        "display": {
          "x": 0,
          "y": -288
        }
      },
      "ea64b494-6e1d-402c-892b-cb4cef9425ba": {
        "id": "ea64b494-6e1d-402c-892b-cb4cef9425ba",
        "name": "Inverter",
        "title": "Inverter",
        "description": "",
        "properties": {},
        "display": {
          "x": -24,
          "y": -360
        },
        "child": "d9600c8b-ac10-40a3-8b78-82a036a619b3"
      },
      "d9600c8b-ac10-40a3-8b78-82a036a619b3": {
        "id": "d9600c8b-ac10-40a3-8b78-82a036a619b3",
        "name": "GreaterThan",
        "title": "GreaterThan",
        "description": "输入值是否大于给定值",
        "properties": {
          "value": 199,
          "direction": "y"
        },
        "display": {
          "x": 156,
          "y": -360
        }
      },
      "49cd4fdf-fca7-4802-852a-94c31fd9c1b6": {
        "id": "49cd4fdf-fca7-4802-852a-94c31fd9c1b6",
        "name": "Inverter",
        "title": "Inverter",
        "description": "",
        "properties": {},
        "display": {
          "x": -12,
          "y": -216
        },
        "child": "d9c52db3-9089-4313-8813-f9bbc6331a17"
      },
      "b6380b0f-0b0f-4f37-8153-ce00d926516b": {
        "id": "b6380b0f-0b0f-4f37-8153-ce00d926516b",
        "name": "Inverter",
        "title": "Inverter",
        "description": "",
        "properties": {},
        "display": {
          "x": 0,
          "y": -96
        },
        "child": "68479848-0b38-4c64-8dee-b703bb6ee4a7"
      },
      "1d2f2abe-9e8f-49c3-bd67-e4a10f6a94a4": {
        "id": "1d2f2abe-9e8f-49c3-bd67-e4a10f6a94a4",
        "name": "Sequence",
        "title": "Sequence",
        "description": "",
        "properties": {},
        "display": {
          "x": -156,
          "y": 96
        },
        "children": [
          "94ed50ad-925f-4feb-8b34-c2dc03dd236f",
          "cccb7408-94e0-4d23-8ab4-3dbde898edad"
        ]
      },
      "94ed50ad-925f-4feb-8b34-c2dc03dd236f": {
        "id": "94ed50ad-925f-4feb-8b34-c2dc03dd236f",
        "name": "Inverter",
        "title": "Inverter",
        "description": "",
        "properties": {},
        "display": {
          "x": 0,
          "y": 60
        },
        "child": "71555904-7674-41a7-a00b-07e0903c1d0a"
      },
      "cccb7408-94e0-4d23-8ab4-3dbde898edad": {
        "id": "cccb7408-94e0-4d23-8ab4-3dbde898edad",
        "name": "Move",
        "title": "Move",
        "description": "走一步",
        "properties": {
          "len": -10,
          "direction": "x"
        },
        "display": {
          "x": 12,
          "y": 144
        }
      },
      "71555904-7674-41a7-a00b-07e0903c1d0a": {
        "id": "71555904-7674-41a7-a00b-07e0903c1d0a",
        "name": "LessThan",
        "title": "LessThan",
        "description": "输入值是否小于给定值",
        "properties": {
          "value": 1,
          "direction": "x"
        },
        "display": {
          "x": 180,
          "y": 60
        }
      }
    },
    "display": {
      "camera_x": 960,
      "camera_y": 489,
      "camera_z": 1,
      "x": -564,
      "y": -96
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
      },
      {
        "version": "0.3.0",
        "scope": "node",
        "name": "RandomSelectors",
        "category": "composite",
        "title": "RandomSelectors",
        "description": "随机执行一个直接子节点",
        "properties": {}
      },
      {
        "version": "0.3.0",
        "scope": "node",
        "name": "Move",
        "category": "action",
        "title": "Move",
        "description": "走一步",
        "properties": {}
      },
      {
        "version": "0.3.0",
        "scope": "node",
        "name": "LessThan",
        "category": "condition",
        "title": "LessThan",
        "description": "输入值是否小于给定值",
        "properties": {}
      },
      {
        "version": "0.3.0",
        "scope": "node",
        "name": "GreaterThan",
        "category": "condition",
        "title": "GreaterThan",
        "description": "输入值是否大于给定值",
        "properties": {}
      }
    ]
  }