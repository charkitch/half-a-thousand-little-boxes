import React from 'react';
import { Link } from 'react-router-dom';
import uploader from './uploader';
import { UPLOAD_FILE_SELECT } from '../../actions/modal_actions';
import { withRouter } from 'react-router'

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
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleRootClick = this.handleRootClick.bind(this);
  }

  accessLinks()  {
    return (
      <nav className="fixed-nav">
        <div className="home-link" onClick={this.handleRootClick}>HATLB</div>
        <div className="logged-out-nav">
          <Link className="access-login" to="/login">Login</Link>
          <br></br>
          <Link className="access-signup" to="signup">Sign Up</Link>
        </div>
      </nav>
    );
  }

  handleRootClick() {
    this.props.history.push('/');
  }

  handleHomeClick() {
    this.props.history.push('/home');
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
      <nav className="sticky-nav">
        <div className="left-side-nav">
          <div className="home-link" onClick={this.handleHomeClick}>HATLB</div>
        </div>
        <div className='logged-in-nav' >
          <div onMouseEnter={this.handleEnterHover}>
            <img className='nav-user-icon' src={window.userIcon} alt="default user icon"/>

            <div onMouseLeave={this.handleExitHover} className={this.state.dropDown} >
              <ul>
                <li>
                  <button className="logout-button" onClick={this.logoutAndDeHover}>Log out</button>
                </li>
              </ul>
            </div>
          </div>
          <button type="submit" className="upload-button" onClick={this.handleUploadClick}>
            <img className='nav-upload-symbol' src={window.uploadIcon}/>
            <span className="upload-Button-text">Upload</span>
          </button>
        </div>
      </nav>
    );
  }

    handleEnterHover(e) {
      this.setState({ dropDown: 'drop-down-logged-in' });
    }

    handleExitHover(e) {
      this.setState({ dropDown: 'hidden' });
    }

    render() {
      return this.props.currentUser ?
      this.personalGreeting() : this.accessLinks();
    }
}

export default withRouter(UserAcknowledgement);
