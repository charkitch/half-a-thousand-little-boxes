import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserAcknowledgementContainer from './user_acknowledgement/user_acknowledgement_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './session_form/log_in_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';
import Splash from './splash';
import Home from './home';
import Modal from './modal/modal';
import FramesIndex from './frames/frames_index_container';

const App = () => {
  return (
    <div>
      <Modal />
      <nav>
        <UserAcknowledgementContainer />
      </nav>
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/home" component={(Home)} />
        <ProtectedRoute exact path="/manage/public" component={(FramesIndex)} />
      </Switch>
    </div>
  );
};

export default App;
