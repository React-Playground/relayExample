import AppDisptacher from '../appDispatcher.js';
import {ActionTypes} from '../../actions/Constants.js';
import {EventEmitter} from 'events';

let _links = [];

class LinkStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDisptacher.register(action => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
          _links = action.links;
          this.emit('change');
          console.log(this);
          break;

        default:

      }
    })
  }

  getAll() {
    return _links;
  }
}

export default new LinkStore();
