import {
  RECEIVE_ONE_FRAME, RECEIVE_USER_FRAMES
  } from '../actions/frame_actions.js';


const framesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_FRAME:
      debugger
      let framesPlusOne = Object.assign({}, state, {[action.payload.frame.id]: action.payload.frame});
      debugger
      return framesPlusOne
    case RECEIVE_USER_FRAMES:
      return Object.assign({}, state, action.userFrames);
    default:
      return state;
  }
};

export default framesReducer;
