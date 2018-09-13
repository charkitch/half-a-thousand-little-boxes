import React from 'react';
import { Link } from 'react-router-dom';

const UserAcknowledgement = ({ currentUser, logout }) => {
  const accessLinks = () => {
    return (
        <div className="logged-out-nav">
          <Link className="access-login" to="/login">Login</Link>
          <br></br>
          <Link className="access-signup" to="signup">Sign Up</Link>
        </div>
    );
  };

  let personalGreeting = () => {
  return (
  <div className='logged-in-nav'>
      <h1 className="tester">welcome {currentUser.username}.</h1>
      <button onClick={logout}>logout. Will become dropdown.</button>
  </div>
    )};

  return currentUser ? personalGreeting() : accessLinks();
};

export default UserAcknowledgement;
