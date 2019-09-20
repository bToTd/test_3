export let fight = {
  "version": "0.3.0",
  "scope": "tree",
  "id": "2c3efab3-fad2-44b1-8516-a172b57856eb",
  "title": "攻击行为树",
  "description": "Tank 的攻击行为树",
  "root": "09cc1589-243e-4cf6-8b13-bf64f52e52ae",
  "properties": {},
  "nodes": {
    "09cc1589-243e-4cf6-8b13-bf64f52e52ae": {
      "id": "09cc1589-243e-4cf6-8b13-bf64f52e52ae",
      "name": "Sequence",
      "title": "Sequence",
      "description": "",
      "properties": {},
      "display": {
        "x": -744,
        "y": -24
      },
      "children": [
        "251dcff7-0fa7-452e-8f4d-eaa350e9a063",
        "31747245-13b2-414d-9164-8ca905eda29f",
        "82f87eb9-3c22-453f-8360-ff3bd4cfcb55",
        "688513fe-abf5-45c7-a9be-84212f17c633",
        "9786137a-56af-4994-a0ab-b6685bc5ff07",
        "267d889d-24b2-4077-88dc-866f61206159",
        "91d2ddfd-6cc7-4395-96b9-2b2df6079f00"
      ]
    },
    "9786137a-56af-4994-a0ab-b6685bc5ff07": {
      "id": "9786137a-56af-4994-a0ab-b6685bc5ff07",
      "name": "FindEnemy",
      "title": "FindEnemy",
      "description": "确定要攻击的敌人\n1. 对位有敌人，优先攻击\n2. 对位没有敌人，选取当前对象左右两边敌人编号小的功能",
      "properties": {
        "local": "number"
      },
      "display": {
        "x": -480,
        "y": 228
      }
    },
    "4cc17c2f-e323-4466-a924-a84f441b3f87": {
      "id": "4cc17c2f-e323-4466-a924-a84f441b3f87",
      "name": "NpcMove",
      "title": "NpcMove",
      "description": "坦克移动\n一般是攻击的对象在射程范围之外，需要移动一定的距离，去进行攻击",
      "properties": {},
      "display": {
        "x": -420,
        "y": 360
      }
    },
    "483479a4-4236-4606-a0da-9f084ce61d4d": {
      "id": "483479a4-4236-4606-a0da-9f084ce61d4d",
      "name": "OutOfRange",
      "title": "OutOfRange",
      "description": "判断是否超出射程\n超出返回 failure\n没超出返回 success",
      "properties": {},
      "display": {
        "x": -420,
        "y": 288
      }
    },
    "267d889d-24b2-4077-88dc-866f61206159": {
      "id": "267d889d-24b2-4077-88dc-866f61206159",
      "name": "Priority",
      "title": "Priority",
      "description": "",
      "properties": {},
      "display": {
        "x": -576,
        "y": 324
      },
      "children": [
        "483479a4-4236-4606-a0da-9f084ce61d4d",
        "4cc17c2f-e323-4466-a924-a84f441b3f87"
      ]
    },
    "7b1a15ad-a58e-4625-8724-9b0d32361095": {
      "id": "7b1a15ad-a58e-4625-8724-9b0d32361095",
      "name": "FullEnergy",
      "title": "FullEnergy",
      "description": "判断 Energy 值是否满了\n满了返回 success\n不满返回 failure",
      "properties": {},
      "display": {
        "x": -348,
        "y": 420
      }
    },
    "6f0a05ae-1778-4723-80b8-896ab5817ec1": {
      "id": "6f0a05ae-1778-4723-80b8-896ab5817ec1",
      "name": "Skill",
      "title": "Skill",
      "description": "使用技能",
      "properties": {},
      "display": {
        "x": -348,
        "y": 480
      }
    },
    "177b6e71-e2b3-4949-b25a-85520a8cba27": {
      "id": "177b6e71-e2b3-4949-b25a-85520a8cba27",
      "name": "Sequence",
      "title": "Sequence",
      "description": "",
      "properties": {},
      "display": {
        "x": -492,
        "y": 444
      },
      "children": [
        "7b1a15ad-a58e-4625-8724-9b0d32361095",
        "6f0a05ae-1778-4723-80b8-896ab5817ec1"
      ]
    },
    "91d2ddfd-6cc7-4395-96b9-2b2df6079f00": {
      "id": "91d2ddfd-6cc7-4395-96b9-2b2df6079f00",
      "name": "Priority",
      "title": "Priority",
      "description": "",
      "properties": {},
      "display": {
        "x": -588,
        "y": 516
      },
      "children": [
        "177b6e71-e2b3-4949-b25a-85520a8cba27",
        "58ebd400-74a8-4591-9476-55182050cde5"
      ]
    },
    "58ebd400-74a8-4591-9476-55182050cde5": {
      "id": "58ebd400-74a8-4591-9476-55182050cde5",
      "name": "Attack",
      "title": "Attack",
      "description": "进行攻击动作",
      "properties": {},
      "display": {
        "x": -432,
        "y": 540
      }
    },
    "7f4b80da-1910-4b7b-a2aa-66877a50ad87": {
      "id": "7f4b80da-1910-4b7b-a2aa-66877a50ad87",
      "name": "TankStatus",
      "title": "TankStatus",
      "description": "状态编码\n1. paralysis 瘫痪状态\n2. faction  内讧状态\n3. fear  怯战状态",
      "properties": {
        "status": "paralysis"
      },
      "display": {
        "x": -216,
        "y": -300
      }
    },
    "251dcff7-0fa7-452e-8f4d-eaa350e9a063": {
      "id": "251dcff7-0fa7-452e-8f4d-eaa350e9a063",
      "name": "IsAlive",
      "title": "IsAlive",
      "description": "判断坦克是否还活着",
      "properties": {},
      "display": {
        "x": -456,
        "y": -372
      }
    },
    "bce1cd04-b08d-4421-88e3-0d0facc5f2e7": {
      "id": "bce1cd04-b08d-4421-88e3-0d0facc5f2e7",
      "name": "TankStatus",
      "title": "TankStatus",
      "description": "状态编码\n1. paralysis 瘫痪状态\n2. faction  内讧状态\n3. fear  怯战状态",
      "properties": {
        "status": "fear"
      },
      "display": {
        "x": -216,
        "y": -144
      }
    },
    "e65fc7bd-3bee-4fd4-8b26-97892bcf9294": {
      "id": "e65fc7bd-3bee-4fd4-8b26-97892bcf9294",
      "name": "Sequence",
      "title": "Sequence",
      "description": "",
      "properties": {},
      "display": {
        "x": -360,
        "y": 60
      },
      "children": [
        "ca256f97-b7b1-4634-883b-b6cca97cbab2",
        "03e0c4af-6f85-484f-a467-d2122d28af41",
        "830fff24-1ec6-4c5b-8ae5-53d723ecdbb4"
      ]
    },
    "ca256f97-b7b1-4634-883b-b6cca97cbab2": {
      "id": "ca256f97-b7b1-4634-883b-b6cca97cbab2",
      "name": "TankStatus",
      "title": "TankStatus",
      "description": "状态编码\n1. paralysis 瘫痪状态\n2. faction  内讧状态\n3. fear  怯战状态",
      "properties": {
        "status": "faction"
      },
      "display": {
        "x": -192,
        "y": 12
      }
    },
    "688513fe-abf5-45c7-a9be-84212f17c633": {
      "id": "688513fe-abf5-45c7-a9be-84212f17c633",
      "name": "Priority",
      "title": "Priority",
      "description": "",
      "properties": {},
      "display": {
        "x": -468,
        "y": 108
      },
      "children": [
        "e65fc7bd-3bee-4fd4-8b26-97892bcf9294",
        "5ea32a91-76ff-4459-b8ba-c46e595008cf"
      ]
    },
    "5ea32a91-76ff-4459-b8ba-c46e595008cf": {
      "id": "5ea32a91-76ff-4459-b8ba-c46e595008cf",
      "name": "Succeeder",
      "title": "Succeeder",
      "description": "",
      "properties": {},
      "display": {
        "x": -312,
        "y": 180
      }
    },
    "03e0c4af-6f85-484f-a467-d2122d28af41": {
      "id": "03e0c4af-6f85-484f-a467-d2122d28af41",
      "name": "Faction",
      "title": "Faction",
      "description": "内讧状态，要攻击自己人",
      "properties": {},
      "display": {
        "x": -192,
        "y": 60
      }
    },
    "31747245-13b2-414d-9164-8ca905eda29f": {
      "id": "31747245-13b2-414d-9164-8ca905eda29f",
      "name": "Inverter",
      "title": "Inverter",
      "description": "",
      "properties": {},
      "display": {
        "x": -480,
        "y": -252
      },
      "child": "56934df0-f71a-441b-9845-3bc0492904ad"
    },
    "82f87eb9-3c22-453f-8360-ff3bd4cfcb55": {
      "id": "82f87eb9-3c22-453f-8360-ff3bd4cfcb55",
      "name": "Inverter",
      "title": "Inverter",
      "description": "",
      "properties": {},
      "display": {
        "x": -492,
        "y": -96
      },
      "child": "1eddec59-5b5c-454d-9b2f-41b16568250b"
    },
    "ebbf8d5f-0827-4b20-9bb6-09f395de2f6f": {
      "id": "ebbf8d5f-0827-4b20-9bb6-09f395de2f6f",
      "name": "Log",
      "title": "Log",
      "description": "输出信息",
      "properties": {},
      "display": {
        "x": -216,
        "y": -252
      }
    },
    "56934df0-f71a-441b-9845-3bc0492904ad": {
      "id": "56934df0-f71a-441b-9845-3bc0492904ad",
      "name": "Sequence",
      "title": "Sequence",
      "description": "",
      "properties": {},
      "display": {
        "x": -372,
        "y": -252
      },
      "children": [
        "7f4b80da-1910-4b7b-a2aa-66877a50ad87",
        "ebbf8d5f-0827-4b20-9bb6-09f395de2f6f",
        "de7f7035-e104-4988-9260-8f6269ce05fa"
      ]
    },
    "4c71e9af-cc64-4ab6-81ed-f23ff85bee0f": {
      "id": "4c71e9af-cc64-4ab6-81ed-f23ff85bee0f",
      "name": "Log",
      "title": "Log",
      "description": "输出信息",
      "properties": {},
      "display": {
        "x": -216,
        "y": -96
      }
    },
    "1eddec59-5b5c-454d-9b2f-41b16568250b": {
      "id": "1eddec59-5b5c-454d-9b2f-41b16568250b",
      "name": "Sequence",
      "title": "Sequence",
      "description": "",
      "properties": {},
      "display": {
        "x": -384,
        "y": -96
      },
      "children": [
        "bce1cd04-b08d-4421-88e3-0d0facc5f2e7",
        "4c71e9af-cc64-4ab6-81ed-f23ff85bee0f",
        "3328ec7a-7213-4722-80a4-eeed652184b5"
      ]
    },
    "830fff24-1ec6-4c5b-8ae5-53d723ecdbb4": {
      "id": "830fff24-1ec6-4c5b-8ae5-53d723ecdbb4",
      "name": "Detoxification",
      "title": "Detoxification",
      "description": "Detoxification \n解除负面状态",
      "properties": {},
      "display": {
        "x": -192,
        "y": 120
      }
    },
    "de7f7035-e104-4988-9260-8f6269ce05fa": {
      "id": "de7f7035-e104-4988-9260-8f6269ce05fa",
      "name": "Detoxification",
      "title": "Detoxification",
      "description": "Detoxification \n解除负面状态",
      "properties": {},
      "display": {
        "x": -216,
        "y": -204
      }
    },
    "3328ec7a-7213-4722-80a4-eeed652184b5": {
      "id": "3328ec7a-7213-4722-80a4-eeed652184b5",
      "name": "Detoxification",
      "title": "Detoxification",
      "description": "Detoxification \n解除负面状态",
      "properties": {},
      "display": {
        "x": -216,
        "y": -48
      }
    }
  },
  "display": {
    "camera_x": 960,
    "camera_y": 382.42500000214204,
    "camera_z": 0.75,
    "x": -852,
    "y": -24
  },
  "custom_nodes": [
    {
      "version": "0.3.0",
      "scope": "node",
      "name": "Attack",
      "category": "action",
      "title": "Attack",
      "description": "进行攻击动作",
      "properties": {}
    },
    {
      "version": "0.3.0",
      "scope": "node",
      "name": "OppositeIsAlive",
      "category": "condition",
      "title": "OppositeIsAlive",
      "description": "判断对位的坦克是否还活着",
      "properties": {}
    },
    {
      "version": "0.3.0",
      "scope": "node",
      "name": "OutOfRange",
      "category": "condition",
      "title": "OutOfRange",
      "description": "判断是否超出射程\n超出返回 failure\n没超出返回 success",
      "properties": {}
    },
    {
      "version": "0.3.0",
      "scope": "node",
      "name": "FullEnergy",
      "category": "condition",
      "title": "FullEnergy",
      "description": "判断 Energy 值是否满了\n满了返回 success\n不满返回 failure",
      "properties": {}
    },
    {
      "version": "0.3.0",
      "scope": "node",
      "name": "Skill",
      "category": "action",
      "title": "Skill",
      "description": "使用技能",
      "properties": {}
    },
    {
      "version": "0.3.0",
      "scope": "node",
      "name": "FindEnemy",
      "category": "action",
      "title": "FindEnemy",
      "description": "确定要攻击的敌人\n1. 对位有敌人，优先攻击\n2. 对位没有敌人，选取当前对象左右两边敌人编号小的功能",
      "properties": {}
    },
    {
      "version": "0.3.0",
      "scope": "node",
      "name": "NpcMove",
      "category": "action",
      "title": "NpcMove",
      "description": "坦克移动\n一般是攻击的对象在射程范围之外，需要移动一定的距离，去进行攻击",
      "properties": {}
    },
    {
      "version": "0.3.0",
      "scope": "node",
      "name": "IsAlive",
      "category": "condition",
      "title": "IsAlive",
      "description": "判断坦克是否还活着",
      "properties": {}
    },
    {
      "version": "0.3.0",
      "scope": "node",
      "name": "TankStatus",
      "category": "condition",
      "title": "TankStatus",
      "description": "状态编码\n1. paralysis 瘫痪状态\n2. faction  内讧状态\n3. fear  怯战状态",
      "properties": {}
    },
    {
      "version": "0.3.0",
      "scope": "node",
      "name": "Faction",
      "category": "action",
      "title": "Faction",
      "description": "内讧状态，要攻击自己人",
      "properties": {}
    },
    {
      "version": "0.3.0",
      "scope": "node",
      "name": "Log",
      "category": "action",
      "title": "Log",
      "description": "输出信息",
      "properties": {}
    },
    {
      "version": "0.3.0",
      "scope": "node",
      "name": "Detoxification",
      "category": "action",
      "title": "Detoxification",
      "description": "Detoxification \n解除负面状态",
      "properties": {}
    }
  ]
}