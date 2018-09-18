import * as FRAME_API_UTIL from '../util/frame_api_util';


export const RECEIVE_USER_PHOTOS = 'RECEIVE_USERS_PHOTOS';
export const RECEIVE_CURRENT_FILE = "RECEIVE_CURRENT_FILE";


export const receiveCurrentFile = (currentFile) => {
  debugger
  return {
    type: RECEIVE_CURRENT_FILE,
    currentFile,
  };
};



export const createFrame = (frame) => {
  return (dispatch) => {
    FRAME_API_UTIL.createFrame(frame).then( (userFrames) => {
      dispatch(receiveUserPhotos(userFrames));
    });
  };
};


const receiveUserPhotos = (userPhotos) => {
  return {
    type: RECEIVE_USER_PHOTOS,
    userPhotos,
  };
};
