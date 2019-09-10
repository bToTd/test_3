# ProcessOn parser

主要用来弥补状态机可视化的缺陷。

processOn 官网: 
https://www.processon.com/

state-machine 的版本为 2+，但是 state-machie 已经更新到 3 了。很多 API 都变了了。因此不要直接使用 npm install 下载最新的 state-machie 。 

在processOn上可以自由绘制流程图

在这里我们可以用圆圈和贝塞尔曲线绘制状态机
1. 拖拽左侧圆圈到画布可以添加状态
2. 双击圆圈可以添加状态名
3. 将鼠标放置到圆圈边缘，等待鼠标呈现十字架状后，拖拽至另一个圆圈可以连线
4. 双击连线可以添加事件名
5. 选中连线后在顶端菜单栏中央可以修改连线类型

状态机绘制完成后请导出为*.pos格式

**注意**
> 一定一定要用英文来命名状态，和状态转换的动作，特别的，动作一定能为空

在creator安装完processon-statemachine后
从菜单栏可以打开对应插件面板

* 面板上侧点击add按钮可以导入所依赖的状态机库
* 面板下侧点击file按钮可以选择我们之前从processOn导出的状态机pos文件 
* 接着可以点击start按钮将pos文件解析为状态机库所使用的配置参数

这时在assets文件夹下将生成state-machine.js依赖库和fsm.js文件。
fsm.js所描述的即为我们在processOn中绘制的状态机。
