/**
 *@description: 状态机的配置表，检查对象的状态转换
 *@author: hwc bToTd 
 *@date: 2019-08-27 15:51:02
 *@version 
 */

export interface State {
    _state: string;
}

export class StateManager{
    private stateTransitionTable = {};      // 状态转移表
    private state:Array<any> = [];          // 状态数组
    private actions = {};                   // 状态对应的动作
    constructor(){

    };
    /**
     * 检查这个对象是否能够在当前输入的条件下的状态转移
     * @param obj 绑定状态的对象
     * @param transition 转换条件
     */
    public check(obj:any, transition:any){
        if(!(obj._state && this.state.indexOf(obj._state))){
            console.log("这个对象不是这个状态机");
            return;
        }
        let newState = this.stateTransitionTable[obj._state][transition];
        if(!newState){
            // 不存在跳转的状态
            return
        }
        obj._state = newState;
        let actions:Array<Function> = this.actions[newState];
        for(let index = 0; index < actions.length; index++){
            let action:Function = actions[index];
            action.call(obj);
        }
    }

    /**
     * 注册状态所执行的动作
     * @param state 状态
     * @param atcion 状态动作
     */
    public registeredActionForState(state:any, atcion:Function){
        if(!this.hasState(state)){
            console.log("状态机没有这个状态，不能注册动作");
            return;
        }
        if(!this.actions[state] || this.actions[state].length === 'undefined'){
            this.actions[state] = [];
        }
        this.actions[state].push(atcion);
    }

    /**
     * 判断状态机是否存在输入的状态
     * @param state 
     */
    public hasState(state:any){
        return this.state.indexOf(state);
    }

    /**
     * 根据 JSON 数据加载状态机
     * @param stateJson 
     */
    public loadStateFromJosn(stateJson:any){
        if(!stateJson){
            console.log("数据为空");
            return;
        }
        if(typeof stateJson === "string"){
            stateJson = JSON.parse(stateJson);
        }
        let tem_state = stateJson.state;
        let tem_trans = stateJson.translations;
        // 生成状态数组
        let stateKeys = Object.keys(tem_state);
        for(let keyIndex = 0; keyIndex < stateKeys.length; keyIndex++){
            this.state[keyIndex] = tem_state[stateKeys[keyIndex]];
        }
        // 拼接状态转换表
        for(let index = 0; index < tem_trans.length; index++){
            let translation = tem_trans[index];
            if(!this.stateTransitionTable[translation["from"]]){
                this.stateTransitionTable[translation["from"]] = {};
            }
            this.stateTransitionTable[translation["from"]][translation["translation"]] = translation["to"];
        }
    }
}