export let tree = {
    "version": "0.3.0",
    "scope": "tree",
    "id": "6fb4ce84-aa13-41d5-8128-0d6ec1317d94",
    "title": "A behavior tree",
    "description": "",
    "root": "e4b3b022-4302-4efa-8fb8-6681c115bca1",
    "properties": {},
    "nodes": {
      "3d466f27-d8d1-4c81-9509-75dce078759c": {
        "id": "3d466f27-d8d1-4c81-9509-75dce078759c",
        "name": "Sequence",
        "title": "Sequence",
        "description": "",
        "properties": {},
        "display": {
          "x": -384,
          "y": -300
        },
        "children": [
          "6230f1d5-8b36-405f-a481-554476a7fe2a",
          "4cb4c8b6-265d-426f-95e5-22d544ca8362",
          "3d75e716-43f1-4a8b-8f2e-65131b8c3e2a"
        ]
      },
      "6230f1d5-8b36-405f-a481-554476a7fe2a": {
        "id": "6230f1d5-8b36-405f-a481-554476a7fe2a",
        "name": "hasSchoolBus",
        "title": "hasSchoolBus",
        "description": "判断是否有校车",
        "properties": {
          "time": 7
        },
        "display": {
          "x": -216,
          "y": -372
        }
      },
      "4cb4c8b6-265d-426f-95e5-22d544ca8362": {
        "id": "4cb4c8b6-265d-426f-95e5-22d544ca8362",
        "name": "Boarding",
        "title": "Boarding",
        "description": "上车",
        "properties": {},
        "display": {
          "x": -216,
          "y": -300
        }
      },
      "ce74c4d9-397c-44b0-af2e-afc321b3cf73": {
        "id": "ce74c4d9-397c-44b0-af2e-afc321b3cf73",
        "name": "Sequence",
        "title": "Sequence",
        "description": "",
        "properties": {},
        "display": {
          "x": -372,
          "y": -96
        },
        "children": [
          "25d2e77f-ff85-4124-83e1-46c4794647e9",
          "67ae9b47-2ade-42c1-90b5-2b2ba8d0a797"
        ]
      },
      "25d2e77f-ff85-4124-83e1-46c4794647e9": {
        "id": "25d2e77f-ff85-4124-83e1-46c4794647e9",
        "name": "hasBicycle",
        "title": "hasBicycle",
        "description": "是否有自行车",
        "properties": {
          "has": "false"
        },
        "display": {
          "x": -192,
          "y": -132
        }
      },
      "3d75e716-43f1-4a8b-8f2e-65131b8c3e2a": {
        "id": "3d75e716-43f1-4a8b-8f2e-65131b8c3e2a",
        "name": "goToSchool",
        "title": "goToSchool",
        "description": "去上学",
        "properties": {
          "time": 2
        },
        "display": {
          "x": -216,
          "y": -228
        }
      },
      "67ae9b47-2ade-42c1-90b5-2b2ba8d0a797": {
        "id": "67ae9b47-2ade-42c1-90b5-2b2ba8d0a797",
        "name": "goToSchool",
        "title": "goToSchool",
        "description": "去上学",
        "properties": {
          "time": 2
        },
        "display": {
          "x": -192,
          "y": -72
        }
      },
      "053d429b-e97e-466e-91e0-1825fec70888": {
        "id": "053d429b-e97e-466e-91e0-1825fec70888",
        "name": "Sequence",
        "title": "Sequence",
        "description": "",
        "properties": {},
        "display": {
          "x": -372,
          "y": 12
        },
        "children": [
          "e8436a2b-a1de-48a0-9d3f-a67d3d9acee7",
          "8db881b5-e6fb-493a-81ce-5cac75231880"
        ]
      },
      "8db881b5-e6fb-493a-81ce-5cac75231880": {
        "id": "8db881b5-e6fb-493a-81ce-5cac75231880",
        "name": "goToSchool",
        "title": "goToSchool",
        "description": "去上学",
        "properties": {
          "time": 2
        },
        "display": {
          "x": -216,
          "y": 132
        }
      },
      "e8436a2b-a1de-48a0-9d3f-a67d3d9acee7": {
        "id": "e8436a2b-a1de-48a0-9d3f-a67d3d9acee7",
        "name": "Inverter",
        "title": "Inverter",
        "description": "",
        "properties": {},
        "display": {
          "x": -240,
          "y": 12
        },
        "child": "e54a66d0-4ede-4f0c-bd20-3133f17a3576"
      },
      "e54a66d0-4ede-4f0c-bd20-3133f17a3576": {
        "id": "e54a66d0-4ede-4f0c-bd20-3133f17a3576",
        "name": "isBrokenFoot",
        "title": "isBrokenFoot",
        "description": "脚断了",
        "properties": {},
        "display": {
          "x": -48,
          "y": 12
        }
      },
      "28c22892-e975-44d9-8250-495a96de4a63": {
        "id": "28c22892-e975-44d9-8250-495a96de4a63",
        "name": "Sleep",
        "title": "Sleep",
        "description": "去个毛的学校，睡觉去",
        "properties": {},
        "display": {
          "x": -312,
          "y": 216
        }
      },
      "e4b3b022-4302-4efa-8fb8-6681c115bca1": {
        "id": "e4b3b022-4302-4efa-8fb8-6681c115bca1",
        "name": "Priority",
        "title": "Priority",
        "description": "",
        "properties": {},
        "display": {
          "x": -552,
          "y": -96
        },
        "children": [
          "3d466f27-d8d1-4c81-9509-75dce078759c",
          "ce74c4d9-397c-44b0-af2e-afc321b3cf73",
          "053d429b-e97e-466e-91e0-1825fec70888",
          "28c22892-e975-44d9-8250-495a96de4a63"
        ]
      }
    },
    "display": {
      "camera_x": 960,
      "camera_y": 489,
      "camera_z": 1,
      "x": -660,
      "y": -96
    },
    "custom_nodes": [
      {
        "version": "0.3.0",
        "scope": "node",
        "name": "hasSchoolBus",
        "category": "condition",
        "title": "hasSchoolBus",
        "description": "判断是否有校车",
        "properties": {
          "time": 7
        }
      },
      {
        "version": "0.3.0",
        "scope": "node",
        "name": "Boarding",
        "category": "action",
        "title": "Boarding",
        "description": "上车",
        "properties": {}
      },
      {
        "version": "0.3.0",
        "scope": "node",
        "name": "hasBicycle",
        "category": "condition",
        "title": "hasBicycle",
        "description": "是否有自行车",
        "properties": {
          "has": "false"
        }
      },
      {
        "version": "0.3.0",
        "scope": "node",
        "name": "goToSchool",
        "category": "action",
        "title": "goToSchool",
        "description": "去上学",
        "properties": {
          "time": 2
        }
      },
      {
        "version": "0.3.0",
        "scope": "node",
        "name": "isBrokenFoot",
        "category": "condition",
        "title": "isBrokenFoot",
        "description": "脚断了",
        "properties": {}
      },
      {
        "version": "0.3.0",
        "scope": "node",
        "name": "Sleep",
        "category": "action",
        "title": "Sleep",
        "description": "去个毛的学校，睡觉去",
        "properties": {}
      }
    ]
  }