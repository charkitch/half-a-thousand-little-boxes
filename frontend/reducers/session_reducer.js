import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const sessionReducer = (state, action) => {
  Object.freeze(state);
  const noUser = { id: null };
  Object.freeze(noUser);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      return noUser;
    default:
      return state;
  }
};

export default sessionReducer;
