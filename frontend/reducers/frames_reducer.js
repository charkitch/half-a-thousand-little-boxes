import { RECEIVE_USER_PHOTOS } from '../actions/frames_actions.js';

const frameReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_PHOTOS:
      return action.userPhotos;
    default:
      return state;
  }
};

export default frameReducer;
