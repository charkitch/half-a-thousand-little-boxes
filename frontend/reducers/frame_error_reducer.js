import { RECEIVE_USER_PHOTOS, RECEIVE_FRAME_ERRORS } from '../actions/frames_actions';

const sessionErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRAME_ERRORS:
      return action.errors;
    case RECEIVE_USER_PHOTOS:
      return [];
    default:
      return state;
  }
};

export default sessionErrorReducer;
