import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState
  if (window.curretUser) {
    preloadedState = {
      session: {
        id: window.currentUser.id,
      },
      entities: { users: { [window.currentUser.id]: window.currentUser } },
    };
  } else {
    preloadedState = {};
  }
  const store = configureStore(preloadedState);
  delete window.currentUser;
  console.log(store)
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});


// document.addEventListener('DOMContentLoaded', () => {
//   let store;
//   let preloadedState
//   if (window.curretUser) {
//     preloadedState = {
//       session: {
//         id: window.currentUser.id,
//       },
//       entities: { users: { [window.currentUser.id]: window.currentUser } }
//     };
//     // store = configureStore(preloadedState);
//   } else {
//     preloadedState = {}
//   }
//   debugger
//   store = configureStore(preloadedState);
//   store = configureStore
//   delete window.currentUser;
//   const root = document.getElementById('root');
//   ReactDOM.render(<Root store={store} />, root);
// });
