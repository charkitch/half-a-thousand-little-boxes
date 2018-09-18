import React from 'react';
import { Link } from 'react-router-dom';
import uploader from './uploader';
import { UPLOAD_FILE_SELECT } from '../../actions/modal_actions';

class UserAcknowledgement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: "hidden"
    };
    this.logoutAndDeHover = this.logoutAndDeHover.bind(this);
    this.handleEnterHover = this.handleEnterHover.bind(this);
    this.handleExitHover = this.handleExitHover.bind(this);
    this.handleUploadClick = this.handleUploadClick.bind(this);
  }

  accessLinks()  {
    return (
      <div className="logged-out-nav">
        <Link className="access-login" to="/login">Login</Link>
        <br></br>
        <Link className="access-signup" to="signup">Sign Up</Link>
      </div>
    );
  }

  logoutAndDeHover() {
    this.setState({ dropDown: 'hidden' });
    this.props.logout();
  }

  handleUploadClick(e) {
    e.preventDefault();
    this.props.openModal(UPLOAD_FILE_SELECT);
  }

  personalGreeting() {
    return (
      <div>
        <div onMouseEnter={this.handleEnterHover} onMouseLeave={this.handleExitHover} className='logged-in-nav'>
          <img className='nav-user-icon' src={window.userIcon} alt="default user icon"/>

          <div className={this.state.dropDown} >
            <ul>
              <li>
                <button className="logout-button" onClick={this.logoutAndDeHover}>Log out</button>
              </li>
            </ul>
          </div>
          <button type="submit" className="upload-button" onClick={this.handleUploadClick}>
            <img className='nav-upload-symbol' src={window.uploadIcon}/>
            <span className="upload-Button-text">Upload</span>
          </button>
        </div>
      </div>
    );
  }

    handleEnterHover(e) {
      this.setState({ dropDown: 'drop-down-logged-in' });
    }

    handleExitHover(e) {
      this.setState({ dropDown: 'hidden' });
    }

    render() {
      return this.props.currentUser ? this.personalGreeting() : this.accessLinks();
    }
}

export default UserAcknowledgement;
