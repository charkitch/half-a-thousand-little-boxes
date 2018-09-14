import React from 'react';
import { Link } from 'react-router-dom';


class UserAcknowledgement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: "hidden"
    }
    this.logoutAndDeHover = this.logoutAndDeHover.bind(this)
    this.handleEnterHover = this.handleEnterHover.bind(this)
    this.handleExitHover = this.handleExitHover.bind(this)
  }

  accessLinks()  {
    return (
      <div className="logged-out-nav">
        <Link className="access-login" to="/login">Login</Link>
        <br></br>
        <Link className="access-signup" to="signup">Sign Up</Link>
      </div>
    );
  };

  logoutAndDeHover() {
    this.setState({ dropDown: 'hidden' })
    this.props.logout();
  }

  personalGreeting() {
    return (
      <div onMouseEnter={this.handleEnterHover} onMouseLeave={this.handleExitHover} className='logged-in-nav'>
        <img className='nav-user-icon' src={window.userIcon} alt="default user icon"/>
        <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

        <div className={this.state.dropDown} >
          <ul>
            <li>
              <button className="logout-button" onClick={this.logoutAndDeHover}>Log out</button>
            </li>
          </ul>
        </div>
      </div>
    )
  }

    handleEnterHover(e) {
      this.setState({ dropDown: 'drop-down-logged-in' })
    }

    handleExitHover(e) {
      this.setState({ dropDown: 'hidden' })
    }

    render() {
      return this.props.currentUser ? this.personalGreeting() : this.accessLinks()
    }
}

export default UserAcknowledgement;