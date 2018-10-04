import { combineReducers } from 'redux';
import entitiesReducer, * as fromEntities from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';


export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
});


export const getFramesByPhotographerId = (state, id) => 
  fromEntities.getFramesByPhotographerId(state.entities, id);
