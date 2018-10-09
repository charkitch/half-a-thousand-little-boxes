import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './users/home_container.js';
import LogInFormContainer from './session_form/log_in_form_container';
import FramesIndex from './frames/index/frames_index_container';
import FrameShowContainer from './frames/show/frame_show_container';
import Modal from './modal/modal';
import SignUpFormContainer from './session_form/sign_up_form_container';
import Splash from './splash';
import UserShow from './users/user_show_container';
import UserAcknowledgementContainer
  from './user_acknowledgement/user_acknowledgement_container';

const App = () => {
  return (
    <div className="app">
      <Modal />
      <UserAcknowledgementContainer />
      <Switch className="main">
        <AuthRoute
          exact path="/"
          component={Splash}
          />
        <AuthRoute
          exact path="/login"
          component={LogInFormContainer}
        />
        <AuthRoute
          exact path="/signup"
          component={SignUpFormContainer}
        />
        <ProtectedRoute
          exact path="/home"
          component={(Home)}
        />
        <ProtectedRoute
          exact path="/users/:id"
          component={(UserShow)}
        />
        <ProtectedRoute
          exact path="/frames/:id"
          component={(FrameShowContainer)}
        />
      </Switch>
    </div>
  );
};

export default App;
