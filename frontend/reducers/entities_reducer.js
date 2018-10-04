import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import framesReducer, * as fromFrames from './frames_reducer';
import currentFileReducer from './current_file_reducer';
import followeesReducer from './followees_reducer';


export default combineReducers({
  users: usersReducer,
  frames: framesReducer,
  followees: followeesReducer,
  currentFile: currentFileReducer,
});

export const getFrames = (state, filter) =>
  fromFrames.getFrames(state.entities.frames, filter);

export const getFramesByPhotographerId = (state, id) =>
  fromFrames.getFramesByPhotographerId(state.frames, id);
