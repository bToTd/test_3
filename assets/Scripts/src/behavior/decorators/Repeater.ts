import Decorator from '../core/Decorator';
import {SUCCESS, ERROR, FAILURE} from '../constants';
import BaseNode from '../core/BaseNode';
import { BaseNodeData } from '../interf';

/**
 * Repeater is a decorator that repeats the tick signal until the child node
 * return `RUNNING` or `ERROR`. Optionally, a maximum number of repetitions
 * can be defined.
 *
 * @module b3
 * @class Repeater
 * @extends Decorator
 **/
 
export default class Repeater extends Decorator {
  public maxLoop: number;

  /**
   * Creates an instance of MaxTime.
   *
   * - **maxLoop** (*Integer*) Maximum number of repetitions. Default to -1 (infinite).
   * - **child** (*BaseNode*) The child node.
   *
   * @param {Object} params Object with parameters.
   * @param {Number} params.maxLoop Maximum number of repetitions. Default to -1 (infinite).
   * @param {BaseNode} params.child The child node.
   * @memberof Repeater
   **/
  constructor() {
    let data:BaseNodeData = {
      name: 'Repeater',
      title: 'Repeat <maxLoop>x'
    }
    super(data);
  }

  /**
   * Open method.
   * @method open
   * @param {Tick} tick A tick instance.
   **/
  open(tick) {
    tick.blackboard.set('i', 0, tick.tree.id, this.id);
  }

  /**
   * Tick method.
   * @method tick
   * @param {Tick} tick A tick instance.
   **/
  tick(tick) {
    if (!this.child) {
      return ERROR;
    }

    var i = tick.blackboard.get('i', tick.tree.id, this.id);
    var status = SUCCESS;

    while (this.properties.maxLoop < 0 || i < this.properties.maxLoop) {
      // @ts-ignore
      status = this.child._execute(tick);

      if (status == SUCCESS || status == FAILURE) {
          i++;
      } else {
        break;
      }
    }

    tick.blackboard.set('i', i, tick.tree.id, this.id);
    return status;
  }
};
