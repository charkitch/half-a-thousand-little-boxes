import * as FOLLOWING_API_UTIL from "./../util/following_api_util";
import { receiveCurrentUser} from './session_actions';
export const RECEIVE_NEW_FOLLOWEE = 'RECEIVE_NEW_FOLLOWEE';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';


export const createFollow = (id) => {
  return (dispatch) => {
    return FOLLOWING_API_UTIL.createFollow(id).then( (user) => {
      return dispatch(receiveCurrentUser(user));
    }, err => {
    dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const deleteFollow = (id) => {
  return (dispatch) => {
    return FOLLOWING_API_UTIL.deleteFollow(id).then( (user) => {
      return dispatch(receiveCurrentUser(user));
    }, err => {
    dispatch(receiveErrors(err.responseJSON));
    });
  };
};


const receiveErrors = errors => {
  return {
    type: RECEIVE_FOLLOW_ERRORS,
    errors
  };
};
