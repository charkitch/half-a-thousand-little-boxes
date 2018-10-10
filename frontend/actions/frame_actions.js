import * as FRAME_API_UTIL from '../util/frame_api_util';

export const RECEIVE_USER_FRAMES = 'RECEIVE_USERS_FRAMES';
export const RECEIVE_CURRENT_FILE = "RECEIVE_CURRENT_FILE";
export const RECEIVE_FRAME_ERRORS = "RECEIVE_FRAME_ERRORS";
export const RECEIVE_ONE_FRAME = "RECEIVE_ONE_FRAME";
export const REMOVE_ONE_FRAME = "REMOVE_ONE_FRAME";

export const receiveCurrentFile = (currentFile) => {
  return {
    type: RECEIVE_CURRENT_FILE,
    currentFile,
  };
};

export const createFrame = (frame) => {
  return (dispatch) => {
    return FRAME_API_UTIL.createFrame(frame).then( (payload) => {
      return dispatch(receiveOneFrame(payload));
    },  err => {
    dispatch(receiveErrors(err.responseJSON));
  });
  };
};

export const requestOneFrame = (id) => {
  return (dispatch) => {
    return FRAME_API_UTIL.requestOneFrame(id).then( payload => {
      return dispatch(receiveOneFrame(payload));
    }, err => {
    dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const updateOneFrame = (frameToUpdate) => {
  return (dispatch) => {
    return FRAME_API_UTIL.updateOneFrame(frameToUpdate).then( frameUpdated => {
      return dispatch(receiveOneFrame(frameUpdated));
    }, err => {
    dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const deleteOneFrame = (frameToDelete) => {
  return (dispatch) => {
    return FRAME_API_UTIL.deleteOneFrame(frameToDelete).then( frameDeleted => {
      return dispatch(removeOneFrame(frameDeleted));
    }, err => {
    dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const requestUserFrames = (userId) => {
  return (dispatch) => {
    return FRAME_API_UTIL.requestUserFrames(userId).then( (userFrames) => {
      return dispatch(receiveUserFrames(userFrames));
    },  err => {
    dispatch(receiveErrors(err.responseJSON));
  });
  };
};

const removeOneFrame = deletedFrame => {
  return {
    type: REMOVE_ONE_FRAME,
    deletedFrame,
  };
};

const receiveUserFrames = userFrames => {
  return {
    type: RECEIVE_USER_FRAMES,
    userFrames,
  };
};


const receiveOneFrame = payload => {
  return {
    type: RECEIVE_ONE_FRAME,
    payload,
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_FRAME_ERRORS,
    errors
  };
};
