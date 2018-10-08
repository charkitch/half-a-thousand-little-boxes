export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_ONE_PHOTOGRAPHER = "RECEIVE_ONE_PHOTOGRAPHER";
export const RECEIVE_ONE_USER = "RECEIVE_ONE_USER";
import * as USER_API_UTIL from "../util/user_api_util";

export const requestOneUser = (id) => {
  return (dispatch) => {
    return USER_API_UTIL.requestOneUser(id).then( user => {
      return dispatch(receiveOneUser(user));
    }, err => {
    dispatch(receiveErrors(err.responseJSON));
    });
  };
};

const receiveOneUser = (user) => {
  return {
    type: RECEIVE_ONE_USER,
    user
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};
