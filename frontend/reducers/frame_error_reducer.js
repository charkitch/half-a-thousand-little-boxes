import {
  RECEIVE_USER_FRAMES, RECEIVE_FRAME_ERRORS
} from '../actions/frames_actions';

const sessionErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRAME_ERRORS:
      return String(action.errors);
    case RECEIVE_USER_FRAMES:
      return [];
    default:
      return state;
  }
};

export default sessionErrorReducer;
