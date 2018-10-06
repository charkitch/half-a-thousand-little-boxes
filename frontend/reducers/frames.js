import {
  RECEIVE_ONE_FRAME, RECEIVE_USER_FRAMES
  } from '../actions/frame_actions.js';


const framesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_FRAME:
      let framesPlusOne = Object.assign(
        {},
        state,
        {[action.payload.frame.id]: action.payload.frame}
      );
      return framesPlusOne;
    case RECEIVE_USER_FRAMES:
      return Object.assign({}, state, action.userFrames);
    default:
      return state;
  }
};

export default framesReducer;



export const getFrames = (state, filter) => {
  switch (filter) {
    case 'All':
      return state;
    case 'id':
      return state.filter( frame => frame.id === filter);
    default:
  }
};

export const getFramesByPhotographerId = (state, id) => {
  let selected = Object.values(state)
    .filter( frame => frame.photographer_id === id);
  return selected;
};

export const getOneFrameById = (state, id) => {
  let frame = Object.values(state)
    .find( f => f.id === id );
  return frame;
};
