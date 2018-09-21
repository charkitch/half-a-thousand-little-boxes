import {
  RECEIVE_ONE_FRAME, RECEIVE_USER_FRAMES
  } from '../actions/frames_actions.js';


const framesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_FRAME:
      return Object.assign({}, state, {[action.frame.id]: action.frame});
    case RECEIVE_USER_FRAMES:
      return Object.assign({}, state, action.userFrames);
    default:
      return state;
  }
};

export default framesReducer;
