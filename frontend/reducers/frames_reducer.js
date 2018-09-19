import { RECEIVE_USER_FRAMES } from '../actions/frames_actions.js';



const framesReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_FRAMES:
      return action.userFrames.frames;
    default:
      return state;
  }
};

export default framesReducer;
