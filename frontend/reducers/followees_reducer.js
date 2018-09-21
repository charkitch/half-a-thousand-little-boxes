import { union } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_NEW_FOLLOWEE,
  RECEIVE_UNFOLLOW
} from '../actions/following_actions';

const followeesReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return union(state, action.user.followees);
    case RECEIVE_NEW_FOLLOWEE:
    case RECEIVE_UNFOLLOW:
      return union(state, action.followees);
    default:
      return state;
  }
};


export default followeesReducer;
