import React from 'react';
import { Link } from 'react-router-dom';

const UserAcknowledgement = ({ currentUser, logout }) => {
  const accessLinks = () => {
    return (
        <nav className="logged-out-nav">
          <Link className="access-login" to="/login">Login</Link>
          <br></br>
          <Link className="access-signup" to="signup">Sign Up</Link>
        </nav>
    );
  };
  const personalGreeting = () => {
  return (
  <div className='navbar-access'>
    <nav className="current-user-nav">
      <h1>welcome {currentUser.username}. 500px does list name, only navbar.</h1>
      <button onClick={logout}>logout. Will become dropdown.</button>
    </nav>
  </div>
    )};
  return currentUser ? personalGreeting() : accessLinks();
};

export default UserAcknowledgement;
