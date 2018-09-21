import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserAcknowledgementContainer from './user_acknowledgement/user_acknowledgement_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './session_form/log_in_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';
import Splash from './splash';
import Home from './users/home_container.js';
import Modal from './modal/modal';
import FramesIndex from './frames/frames_index_container';
import UserShow from './users/user_show_container';
import FrameShow from './frames/frame_show_container';

const App = () => {
  return (
    <div className="app">
      <Modal />
      <UserAcknowledgementContainer />
      <Switch className="main">
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/home" component={(Home)} />
        <ProtectedRoute exact path="/users/:id" component={(UserShow)} />
        <ProtectedRoute exact path="/frames/:id" component={(FrameShow)} />
      </Switch>
    </div>
  );
};

export default App;
