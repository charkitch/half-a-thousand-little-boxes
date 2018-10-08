import * as FOLLOWING_API_UTIL from "./../util/following_api_util";

export const RECEIVE_NEW_FOLLOWEE = "RECEIVE_NEW_FOLLOWEE";
export const RECEIVE_UNFOLLOW = "RECEIVE_UNFOLLOW";
export const RECEIVE_FOLLOW_ERRORS = "RECEIVE_FOLLOW_ERRORS";

export const createFollow = (id) => {
  return (dispatch) => {
    return FOLLOWING_API_UTIL.createFollow(id).then( (followees) => {
      return dispatch(receiveNewFollowee(followees));
    }, err => {
    dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const deleteFollow = (id) => {
  return (dispatch) => {
    return FOLLOWING_API_UTIL.deleteFollow(id).then( (followees) => {
      return dispatch(receiveUnfollow(followees));
    }, err => {
    dispatch(receiveErrors(err.responseJSON));
    });
  };
};




const receiveNewFollowee = (followees) => {
  return {
    type: RECEIVE_NEW_FOLLOWEE,
    followees,
  };
};

const receiveUnfollow = (followees) => {
  return {
    type: RECEIVE_UNFOLLOW,
    followees,
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_FOLLOW_ERRORS,
    errors
  };
};
