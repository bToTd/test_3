import { SnakeState, STATE } from "./SnakeState";
import { SnakeMoveRight } from "./SnakeMoveRight";
import { SnakeMoveLeft } from "./SnakeMoveLeft";
import { SnakeStop } from "./SnakeStop";

/**
 *@description: 
 *@author: hwc bToTd 
 *@date: 2019-07-25 19:38:22
 *@version 
 */

 export default class SnakeMoveUp extends SnakeState{

    constructor () {
        super();
        console.log("state in up");
        this.move();
    }
    handleInput (Snake: any, input: any) {
        if (input === STATE.RIGHT) {
            Snake.state = new SnakeMoveRight();
        } else if (input === STATE.LEFT){
            Snake.state = new SnakeMoveLeft();
        } else if (input === STATE.STOP) {
            Snake.state = new SnakeStop();
       }
     }    
    move () {
        this.speed_x = 0;
        this.speed_y = 1;
     }
 } 