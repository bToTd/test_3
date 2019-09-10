import { SnakeState, STATE } from "./SnakeState";
import { SnakeMoveDown } from "./SnakeMoveDown";
import SnakeMoveUp from "./SnakeMoveUp";
import { SnakeStop } from "./SnakeStop";


export class SnakeMoveRight extends SnakeState{

    constructor () {
        super();
        this.move();
        console.log("state in right");
    }

    handleInput (Snake:any, input:any) {
        if (input === STATE.DOWN) {
            Snake.state = new SnakeMoveDown();
        } else if (input === STATE.UP) {
            Snake.state = new SnakeMoveUp();
        } else if (input === STATE.STOP) {
            Snake.state = new SnakeStop();
       }
    }

    move(){
        this.speed_x = 1;
        this.speed_y = 0;
    }
}