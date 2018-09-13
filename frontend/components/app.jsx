import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserAcknowledgementContainer from './user_acknowledgement/user_acknowledgement_container';
import { AuthRoute } from '../util/route_util';
import LogInFormContainer from './session_form/log_in_form_container';
import SignUpFormContainer from './session_form/sign_up_form_container';
import Splash from './splash';

const App = () => {
  return (
    <div>
      <nav>
        <UserAcknowledgementContainer />
      </nav>
      <Switch>
        <Route exact path="/" component={Splash} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
