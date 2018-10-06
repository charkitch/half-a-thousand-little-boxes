import { combineReducers } from 'redux';
import entitiesReducer, * as fromEntities from './entities';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';


export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
});


export const getFramesByPhotographerId = (state, id) =>
  fromEntities.getFramesByPhotographerId(state.entities, id);

export const getOneFrameById = (state, id) => {
  let blern = fromEntities.getOneFrameById(state.entities, id);
  return blern;
};


export const getPhotographerByFrameId = (state, id) =>
  fromEntities.getPhotographerByFrameId(state.entities, id);

export const getUserById = (state, id) => {
  debugger
  return fromEntities.getUserById(state.entities, id);
};
