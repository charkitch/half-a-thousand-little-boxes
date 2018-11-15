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
    this.state = {
      hoverStatus: false,
      className: "user-avatar",
    };
    this.deHover = this.deHover.bind(this);
    this.enHover = this.enHover.bind(this);
    this.handleProfileSelect = this.handleProfileSelect.bind(this);
    this.handleUplpad = this.handleUpload.bind(this);
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

  handleProfileSelect(e) {
    let x = document.getElementById('avat-upload')
    this.setState({hoverStatus: false});
    x.click();
  }

  vanillaProfilePic() {
    return (
      <div>
        <img className={this.state.className}
              onMouseEnter={this.enHover}
              onMouseLeave={this.deHover}
              src={window.userIcon}
              alt="default user icon"
        />
      </div>
      );
  }

  handleUpload(e) {
    debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar[picture]', e.currentTarget.files[0]);
    this.props.createAvatar(formData);
  }

  uploaderProfilePic() {
    const style = { backgroundImage: `url(${window.userIcon})`};
    return (
      <div>
        <div
            className="user-avatar avatar-upload-ready"
            onMouseLeave={this.deHover}
            style={style}
            onClick={this.handleProfileSelect}
          >
          <input id="avat-upload" className="profile-upload" type="file" onChange={this.handleUpload}/>
        </div>
      </div>
      );
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
