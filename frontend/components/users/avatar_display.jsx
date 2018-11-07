import { useState, useEffect, useRef } from 'react';




<img className="user-avatar"
  src={window.userIcon}
  atl="default user icon"/>


function onClickInside(ref, handler) {
  useEffect( () => {
    const listener = event => {
      if (ref.current.contains(event.target)) {

      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.
    }
  })

}

export default AvatarDisplay;


import React from 'react';
import { Link } from 'react-router-dom';
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
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleRootClick = this.handleRootClick.bind(this);
    this.handleVanity = this.handleVanity.bind(this);
  }

  accessLinks()  {
    let navClass = "fixed-nav";
    let logoClass = "home-link";
    if (this.props.whereWeAt === "/") {
      navClass = "fixed-nav nav-splash";
      logoClass = "splash-home-link";
    }
    return (
      <nav className={navClass}>
        <div className="left-side-nav">
          <div className={`${logoClass} + clickable`}
            onClick={this.handleRootClick}
          >
            <div className='big-logo-start'>HAT</div>
            <div className='small-logo-middle'>l</div>
            <div className='smallest-log-end'>b</div>
          </div>
        </div>
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

  handleVanity(e){
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`);
  }

  personalGreeting() {
    return (
      <nav className="sticky-nav">
        <div className="left-side-nav">
          <div className="home-link clickable" onClick={this.handleRootClick}>
            <div className='big-logo-start'>HAT</div>
            <div className='small-logo-middle'>l</div>
            <div className='smallest-log-end'>b</div>
          </div>
        </div>
        <div className='logged-in-nav' onMouseLeave={this.handleExitHover}>
          <div onMouseEnter={this.handleEnterHover}>
            <img className='nav-user-icon'
              src={window.userIcon}
              alt="default user icon"/>
            <div
              className={this.state.dropDown} >
                <div className="drop-down-assemblage">
                  <button
                    className="drop-down-button"
                    onClick={this.handleVanity}>
                    My profile
                  </button>
                </div>
                <div className="drop-down-assemblage">
                  <button
                    className="drop-down-button"
                    onClick={this.logoutAndDeHover}>
                    Log out
                  </button>
                </div>
            </div>
          </div>
          <button
            type="submit"
            className="upload-button"
            onClick={this.handleUploadClick}>
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

export default UserAcknowledgement;


import { connect } from 'react-redux';
import React from 'react';

import { UPLOAD_FORM, openModal } from '../../../actions/modal_actions';
import { receiveCurrentFile } from '../../../actions/frame_actions';

class UploadSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleFile = this.handleFile.bind(this);
  }


  handleFile(e) {
    const file = e.currentTarget.files[0];
    this.props.receiveCurrentFile(file);
    this.props.openModal(UPLOAD_FORM);
  }


  render() {
    return (
      <div>
        <div className="upload-mask clickable">
          <div className="upload-text">Select a Photo</div>
        </div>
        <input className="upload-input" type="file" onChange={this.handleFile}/>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    receiveCurrentFile: file => dispatch(receiveCurrentFile(file))
  };
};

const mapStateToProps = (state) => {
  return {
   currentUser: state.entities.users[state.session.id],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadSelect);
