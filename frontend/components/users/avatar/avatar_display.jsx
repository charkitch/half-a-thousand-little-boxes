import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  createAvatar,
  updateAvatar,
  deleteAvatar
} from '../../../actions/avatar_actions';

import { EDIT_AVATAR, openModal } from '../../../actions/modal_actions';

import { getCurrentUser } from '../../../reducers/root_reducer';

import { receiveCurrentFile } from '../../../actions/frame_actions';



class AvatarDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverStatus: false,
      className: "user-avatar",
    };
    this.fileRef = React.createRef();
    this.deHover = this.deHover.bind(this);
    this.enHover = this.enHover.bind(this);
    // this.handleProfileSelect = this.handleProfileSelect.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  deHover(e) {
    this.setState({
      hoverStatus: false,
      className: "user-avatar"
    });
  }

  enHover(e) {
    if (this.props.imageOwned) {
      this.setState({
        hoverStatus: true,
        className: "user-avatar avatar-upload-ready"
      });
    }
  }


  handleFile(e) {
    const file = e.currentTarget.files[0];
    this.props.receiveCurrentFile(file);
    this.props.openModal(EDIT_AVATAR)
  }

  vanillaProfilePic() {
    console.log('van van vanilla')
    let image = this.props.avatarLocale ? this.props.avatarLocale : window.userIcon
    return (
      <div>
        <img 
          className={this.state.className}
          onMouseEnter={this.enHover}
          src={image}
          alt="default user icon"
        />
      </div>
      );
  }


  uploaderProfilePic() {
    let image = this.props.avatarLocale ? this.props.avatarLocale : window.userIcon
    const style = { 
      backgroundImage: `url(${image})`,
      backgroundSize: `cover`
    };
    return (
      <div>
        <label
          htmlFor="avat-upload"
          className="user-avatar avatar-upload-ready"
          style={style}
          >
        </label>
        <input 
          id="avat-upload" 
          className="profile-upload" 
          type="file" 
          ref={this.fileRef}
          onInput={this.handleFile}
        />
      </div>
      );
  }

  componentDidUpdate(oldprops, oldstate) {
  }

  render() {
    return (
      this.state.hoverStatus ? this.uploaderProfilePic() : this.vanillaProfilePic()
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAvatar: (avatar) => dispatch(createAvatar(avatar)),
    openModal: (modal) => dispatch(openModal(modal)),
    updateAvatar: (avatar) => dispatch(updateAvatar(avatar)),
    deleteAvatar: () => dispatch(deleteAvatar()),
    receiveCurrentFile: (file) => dispatch(receiveCurrentFile(file))
  };
};


const mapStateToProps = (state, ownProps) => {
  const isItMe = getCurrentUser(state).id === ownProps.shownUser.id;
  let ident = ownProps.location.pathname[ownProps.location.pathname.length-1];
  let avatarLocale = state.entities.users[ident].avatarLocale;
  return {
    avatarLocale: avatarLocale,
    imageOwned: isItMe
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps)(AvatarDisplay));
