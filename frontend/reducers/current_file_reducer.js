import { RECEIVE_CURRENT_FILE } from '../actions/frames_actions.js';

const currentFileReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_FILE:
      return action.currentFile;
    default:
      return state;
  }
};

export default currentFileReducer;
