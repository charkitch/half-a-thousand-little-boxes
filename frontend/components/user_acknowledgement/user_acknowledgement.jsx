import React from 'react';
import { Link } from 'react-router-dom';

const UserAcknowledgement = ({ currentUser, logout }) => {
  const accessLinks = () => {
    return (
      <nav>
        <Link className="login" to="/login">Login</Link>
        <br></br>
        <Link className="signup" to="signup">Sign Up</Link>
      </nav>
    );
  };
  const personalGreeting = () => {
  return (
    <nav className="current-user-nav">
      <h1>welcome {currentUser.username}. 500px does list name, only navbar.</h1>
      <button onClick={logout}>logout. Will become dropdown.</button>
    </nav>
    )};
  return currentUser ? personalGreeting() : accessLinks();
};

export default UserAcknowledgement;
