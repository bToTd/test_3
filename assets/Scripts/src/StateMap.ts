import { StateManager } from "./StateManager";

/**
 *@description: 集合使用某一类状态机的所有对象
 *@author: hwc bToTd 
 *@date: 2019-08-28 18:19:34
 *@version 
 */

export default class StateMap{
    private objArray = [];
    private state:StateManager = null;
    private listen:string = '';
    constructor(state?:StateManager){
        this.state = state;
    }
    
    public getState(){
        return this.state;
    }
    public push(obj:any){
        // 状态验证
        if(!(obj._state && this.state.hasState(obj._state))){
            console.log("状态类型不符合，无法进入当前容器");
            return;
        }
        if(this.objArray.indexOf(obj)){
            // 注册对象不能重复
            return;
        }
        this.objArray.push(obj);
    }
    /**
     * 移除状态机集合中管理的对象
     * @param obj 
     */
    public remove (obj:any) {
        let index = this.objArray.indexOf(obj);
        if(index === -1){
            // 没有这个元素，不需要执行操作
            return;
        }
        this.objArray.slice(index, 1);
    }
    public appendListen(){

    }
    /**
     * 状态机的跳转
     * @param transition 转换条件
     */
    private run (transition) {
        for(let index = 0; index < this.objArray.length; index++){
            this.state.check(this.objArray[index], transition);
        }
    }
}