import { SnakeState, STATE } from "./SnakeState";
import { SnakeMoveLeft } from "./SnakeMoveLeft";
import { SnakeMoveRight } from "./SnakeMoveRight";
import { SnakeMoveDown } from "./SnakeMoveDown";
import SnakeMoveUp from "./SnakeMoveUp";


export class SnakeStop extends SnakeState{

    constructor () {
        super();
        this.move();
        console.log("state in stop");
    }

    handleInput(Snake:any, input:any){
        if (input === STATE.LEFT) {
            Snake.state = new SnakeMoveLeft();
        } else if (input === STATE.RIGHT) {
            Snake.state = new SnakeMoveRight();
        } else if (input === STATE.DOWN) {
            Snake.state = new SnakeMoveDown();
        } else if (input === STATE.UP) {
            Snake.state = new SnakeMoveUp();
        }
    }
    move(){
        this.speed_x = 0;
        this.speed_y = 0;
    }
}