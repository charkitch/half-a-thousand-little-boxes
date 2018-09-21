import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser
        }
      },
      session: { id }
      };
    store = configureStore(preloadedState);

    delete window.currentUser;

  } else {
    store = configureStore();
  }
  window.store = store;
  delete window.currentUser;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
