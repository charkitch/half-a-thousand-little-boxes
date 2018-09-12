import React from 'react';
import { Switch } from 'react-router-dom';
import UserAcknowledgementContainer from './user_acknowledgement/user_acknowledgement_container';
import { AuthRoute } from '../util/route_util.jsx'
import LogInFormContainer from './session_form/log_in_form_container'
import SignUpFormContainer from './session_form/sign_up_form_container'

const App = () => {
  return (
    <div>
      <header>
        <UserAcknowledgementContainer />
      </header>
      <p>A 1F416 joke would be good here. </p>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
