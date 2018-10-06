import { combineReducers } from 'redux';

import currentFileReducer from './current_file';
import followeesReducer from './followees_reducer';
import framesReducer, * as fromFrames from './frames';
import usersReducer, * as fromUsers from './users';


export default combineReducers({
  users: usersReducer,
  frames: framesReducer,
  followees: followeesReducer,
  currentFile: currentFileReducer,
});

export const getFrames = (state, filter) =>
 fromFrames.getFrames(state.frames, filter);

export const getFramesByPhotographerId = (state, id) => {
  return fromFrames.getFramesByPhotographerId(state.frames, id);
};

export const getOneFrameById = (state, id) =>{
  let blorn = fromFrames.getOneFrameById(state.frames, id);
  return blorn;
};

export const getPhotographerByFrameId = (state, id) => {
  return fromUsers.getPhotographerByFrameId(state.users, id);
};

export const getUserById = (state, id) => {
  debugger
  return fromUsers.getUserById(state.users, id);
};
