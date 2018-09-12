import { combineReducers } from 'redux';
import sessionErrorReducer from './session_error_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorReducer,
});

export default errorsReducer;
