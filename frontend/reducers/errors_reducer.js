import { combineReducers } from 'redux';
import sessionErrorReducer from './session_error_reducer';
import frameErrorReducer from './frame_error_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorReducer,
  frames: frameErrorReducer,
});

export default errorsReducer;
