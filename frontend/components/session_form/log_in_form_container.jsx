import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { clearErrors } from '../../actions/session_actions';


const mapStateToProps = ( state, ownProps ) => {
  return {
    errors: state.errors.session,
    formType: 'Log in',
    identifierText: 'Email or Username',
    inputType: 'text',
    exortation: 'Log In to',
    bumperText: "Don't have an account?",
    navLink: <Link to="/signup">Sign up</Link>,
    path: ownProps.match.path,
    pathStatus: ownProps.match.path === "signup",
  };
};

const mapDispatchToProps= dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors()),
    processForm: user => dispatch(login(user)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
