/**
 *@description: 状态设计模式的一个demo
 *@author: hwc bToTd 
 *@date: 2019-07-25 19:31:39
 *@version 0.1.0
 */

export abstract class SnakeState {
    protected speed_x:number = 0;
    protected speed_y:number = 0;

    constructor(){

    }
    abstract handleInput(Snake:any, input:any);
    abstract move();

    public getSpeed(){
        return{
            xv: this.speed_x,
            yv: this.speed_y
        }
    }
}

export enum STATE {
    UP = 0,
    RIGHT = 1,
    DOWN = 2,
    LEFT = 3,
    STOP = 4
}