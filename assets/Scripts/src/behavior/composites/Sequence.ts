import Composite from '../core/Composite';
import {SUCCESS} from '../constants';
import { BaseNodeData } from '../interf';

/**
 * The Sequence node ticks its children sequentially until one of them
 * returns `FAILURE`, `RUNNING` or `ERROR`. If all children return the
 * success state, the sequence also returns `SUCCESS`.
 *
 * @module b3
 * @class Sequence
 * @extends Composite
 **/
 
export default class Sequence extends Composite {

  /**
   * Creates an instance of Sequence.
   * @param {Object} params 
   * @param {Array} params.children 
   * @memberof Sequence
   */
  constructor(data:BaseNodeData){
  
    data.name= 'Sequence' 
    super(data);
  }

  /**
   * Tick method.
   * @method tick
   * @param {b3.Tick} tick A tick instance.
   * @return {Constant} A state constant.
   **/
  tick(tick) {
    for (var i=0; i<this.children.length; i++) {
      var status:any = this.children[i]._execute(tick);

      if (status !== SUCCESS) {
        return status;
      }
    }

    return SUCCESS;
  }
};
