import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import UserAcknowledgementContainer from './user_acknowledgement/user_acknowledgement_container';

const App = () => {
  return (
    <div>
      <header>
        <UserAcknowledgementContainer />
      </header>
      <p>A 1F416 joke would be good here. </p>
      <switch>
       <AuthRoute exact path="/login" component={LogInFormContainer} />
       <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      </switch>
    </div>
  );
};

export default App;
