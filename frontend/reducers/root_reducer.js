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

export const getUsers = (state, filter) => {
  return fromEntities.getUsersByFilter(state.entities, filter);
};

export const getPhotographerByFrameId = (state, id) => {
  return fromEntities.getPhotographerByFrameId(state.entities, id);
};

export const getUserById = (state, id) => {
  return fromEntities.getUserById(state.entities, id);
};


export const getCurrentUser = (state) => {
  return getUserById(state, state.session.id);
};

export const getFollowStatus = (state, id) => {
  let currentUser = getCurrentUser(state);
  return currentUser.followees.includes(id);
};
