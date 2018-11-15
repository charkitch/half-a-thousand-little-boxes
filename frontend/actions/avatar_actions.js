import * as AVATAR_API_UTIL from '../util/avatar_util';
import { receiveOneUser } from './user_actions';

export const RECEIVE_AVATAR_ERRORS = "REMOVE_AVATAR_ERRORS";


export const createAvatar = (avatar) => {
  debugger
  return (dispatch) => {
    return AVATAR_API_UTIL.createAvatar(avatar).then( user => {
      return dispatch(receiveOneUser(user));
    },  err => {
    dispatch(receiveErrors(err.responseJSON));
  });
  };
};

export const updateAvatar = (avatar) => {
  return (dispatch) => {
    return AVATAR_API_UTIL.updateAvatar(avatar).then( user => {
      return dispatch(receiveOneUser(user));
    }, err => {
    dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const deleteAvatar = () => {
  return (dispatch) => {
    return AVATAR_API_UTIL.deleteAvatar().then( user => {
      return dispatch(receiveOneUser(user));
    }, err => {
    dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_AVATAR_ERRORS,
    errors
  };
};
