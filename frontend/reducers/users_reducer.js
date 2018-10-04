import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ONE_USER } from '../actions/user_actions';
import { RECEIVE_ONE_FRAME } from '../actions/frame_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let user;
  switch (action.type) {
    case RECEIVE_ONE_FRAME:
    user = action.payload.user;
    return Object.assign({}, state, { [user.id]: user });
    case RECEIVE_ONE_USER:
    case RECEIVE_CURRENT_USER:
      user = action.user;
      return Object.assign({}, state, { [user.id]: user });
    default:
      return state;
  }
};


export default usersReducer;
