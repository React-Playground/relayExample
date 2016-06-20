import AppDispatcher from '../js/appDispatcher.js';
import {ActionTypes} from './Constants.js';
const ServerActions = {
  receiveLinks(links) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links: links
    });
  }
}

export default ServerActions;
