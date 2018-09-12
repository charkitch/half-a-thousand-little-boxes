import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: 'Log in',
    identifierText: 'Email or Username',
    exortation: 'Log In to',
    bumperText: <p> Don't have an account? </p>,
    navLink: <Link to="/signup">Sign up</Link>
};
};

const mapDispatchToProps= dispatch => {
  return {
    processForm: user => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
