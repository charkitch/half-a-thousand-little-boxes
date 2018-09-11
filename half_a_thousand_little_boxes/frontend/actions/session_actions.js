import * as SessionAPIUtil from './../util/session_api_util';

export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const logoutCurrentUser = () => {
  return { type: LOGOUT_CURRENT_USER };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

//who have thunk it

export const singnUp = (user) => {
  return dispatch => {
    return SessionAPIUtil.createUser(user).then( user => {
      dispatch(receiveCurrentUser(user)), err => {
      dispatch(receiveErrors(err.responseJSON));
      };
    });
  };
};

export const login = (user) => {
  return dispatch => {
    return SessionAPIUtil.login(user).then( user => {
      dispatch(receiveCurrentUser(user)), err => {
      dispatch(receiveErrors(err.responseJSON));
      };
    });
  };
};

export const logout = () => {
  return dispatch => {
    return SessionAPIUtil.logout().then( user => {
      dispatch(LOGOUT_CURRENT_USER());
    });
  };
};
