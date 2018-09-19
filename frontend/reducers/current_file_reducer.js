import { RECEIVE_CURRENT_FILE, RECEIVE_USER_FRAMES } from '../actions/frames_actions.js';

const currentFileReducer = (state = null, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_FILE:
      return action.currentFile;
    case RECEIVE_USER_FRAMES:
      return null;
    default:
      return state;
  }
};

export default currentFileReducer;
