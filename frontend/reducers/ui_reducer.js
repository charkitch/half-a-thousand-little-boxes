import { combineReducers } from 'redux';

import flagReducer from './flag_reducer';
import modalReducer from './modal_reducer';

export default combineReducers({
  modal: modalReducer,
  flag: flagReducer,
});
