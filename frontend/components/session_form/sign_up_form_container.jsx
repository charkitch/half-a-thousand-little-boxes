import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: 'Sign up',
    identifierText: 'Email',
    exortation: 'Join',
    bumperText: <p>Already have an account?</p>,
    navLink: <Link to="/login">Log in</Link>
};
};


const mapDispatchToProps= dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
