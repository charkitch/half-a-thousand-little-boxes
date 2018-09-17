import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import framesReducer from './frames_reducer';
import currentFileReducer from './current_file_reducer';

export default combineReducers({
  users: usersReducer,
  frames: framesReducer,
  currentFile: currentFileReducer,
});
