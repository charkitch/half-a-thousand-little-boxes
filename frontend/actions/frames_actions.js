import * as FRAME_API_UTIL from '../util/frame_api_util';


export const RECEIVE_USER_PHOTOS = 'RECEIVE_USERS_PHOTOS';
export const RECEIVE_CURRENT_FILE = "RECEIVE_CURRENT_FILE";


const receiveCurrentFile = (currentFile) => {
  return {
    type: RECEIVE_CURRENT_FILE,
    currentFile,
  };
};



export const aquireCurrentFile = (dispatch) => {
  return (currentFile) => {
    dispatch(receiveCurrentFile(currentFile))
  };
};


export const sendPhoto = (dispatch) => {
  return (photo) => {
    FRAME_API_UTIL.uploadPhoto(photo).then( (userPhotos) => {
      dispatch(receiveUserPhotos(userPhotos));
    });
  };
};


const receiveUserPhotos = (userPhotos) => {
  return {
    type: RECEIVE_USER_PHOTOS,
    userPhotos,
  };
};
