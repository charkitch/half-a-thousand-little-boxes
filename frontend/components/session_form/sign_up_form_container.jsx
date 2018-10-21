import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { clearErrors } from '../../actions/session_actions';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ( state, ownProps ) => {
  return {
    errors: state.errors.session,
    formType: 'Sign up',
    identifierText: 'Email ',
    inputType: 'email',
    exortation: 'Join',
    bumperText: 'Already have an account?',
    navLink: <Link to="/login">Log in</Link>,
    path: "/signup",
    pathStatus: ownProps.match.path === "signup"
  };
};


const mapDispatchToProps= dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: user => dispatch(signup(user)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
