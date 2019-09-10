import { SnakeState, STATE } from "./SnakeState";
import { SnakeMoveLeft } from "./SnakeMoveLeft";
import { SnakeMoveRight } from "./SnakeMoveRight";
import { SnakeStop } from "./SnakeStop";


export class SnakeMoveDown extends SnakeState{

    constructor(){
        super();
        this.move();
        console.log("state in down")
    }

    handleInput(Snake:any, input:any){
       if (input === STATE.LEFT) {
            Snake.state = new SnakeMoveLeft();
       } else if (input === STATE.RIGHT) {
            Snake.state = new SnakeMoveRight();
       } else if (input === STATE.STOP) {
            Snake.state = new SnakeStop();
       }
    }
    move(){
        this.speed_x = 0;
        this.speed_y = -1;
    }
}