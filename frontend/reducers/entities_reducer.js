import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import framesReducer from './frames_reducer';

export default combineReducers({
  users: usersReducer,
  frames: framesReducer,
});
