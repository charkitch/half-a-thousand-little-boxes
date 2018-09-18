import * as FRAME_API_UTIL from '../util/frame_api_util';


export const RECEIVE_USER_PHOTOS = 'RECEIVE_USERS_PHOTOS';
export const RECEIVE_CURRENT_FILE = "RECEIVE_CURRENT_FILE";
export const RECEIVE_FRAME_ERRORS = "RECEIVE_FRAME_ERRORS";

export const receiveCurrentFile = (currentFile) => {
  return {
    type: RECEIVE_CURRENT_FILE,
    currentFile,
  };
};



export const createFrame = (frame) => {
  return (dispatch) => {
    return FRAME_API_UTIL.createFrame(frame).then( (userFrames) => {
      return dispatch(receiveUserPhotos(userFrames));
    },  err => {
    dispatch(receiveErrors(err.responseJSON));
  });
  };
};


const receiveUserPhotos = (userPhotos) => {
  return {
    type: RECEIVE_USER_PHOTOS,
    userPhotos,
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_FRAME_ERRORS,
    errors
  };
};
