import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getCurrentUser } from '../../reducers/root_reducer';

import {
  createAvatar,
  updateAvatar,
  deleteAvatar
} from '../../actions/avatar_actions';


class AvatarDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.profilePicture = props.shownUser.avatarLocale ? props.shownUser.avatarLocale : window.userIcon
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


                // onMouseLeave={this.deHover}


  handleFile(e) {
    console.log('handle file')
    const formData = new FormData();
    formData.append('avatar[shown_user_id]', this.props.shownUser.id)
    formData.append('avatar[picture]', e.currentTarget.files[0]);
    this.props.createAvatar(formData)
      .then(this.setState({hoverStatus: false}));
  }

  vanillaProfilePic() {
    console.log('van van vanilla')
    return (
      <div>
        <img className={this.state.className}
              onMouseEnter={this.enHover}
              src={this.profilePicture}
              alt="default user icon"
        />
      </div>
      );
  }

  uploaderProfilePic() {
    const style = { backgroundImage: `url(${this.profilePicture})`};
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
  // onMouseLeave={this.deHover}


  render() {
    return (
      this.state.hoverStatus ? this.uploaderProfilePic() : this.vanillaProfilePic()
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAvatar: (avatar) => dispatch(createAvatar(avatar)),
    updateAvatar: (avatar) => dispatch(updateAvatar(avatar)),
    deleteAvatar: () => dispatch(deleteAvatar()),
  };
};


const mapStateToProps = (state, ownProps) => {
  const isItMe = getCurrentUser(state).id === ownProps.shownUser.id;
  return {
    imageOwned: isItMe
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps)(AvatarDisplay));
