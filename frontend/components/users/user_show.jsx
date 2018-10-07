import React from 'react';
import FramesIndex from '../frames/frames_index_container';
import { withRouter } from 'react-router';
import UserDetails from './user_details';
import UserNav from './user_nav';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }


  onSelection() {
    if (this.props.followees.includes(this.shownUser)) { // user not following
      (this.props.deleteFollow(this.shownUser));
    } else {
      this.props.createFollow(this.shownUser);
    }
  }

  buttonText() {
    if (this.props.shownUser.followees.includes(this.shownUser)) {
      return "Unfollow";
    } else {
      return "Follow";
    }
  }


  buttonClass() {
    if (this.props.shownUser === this.props.currentUser) {
      return "hidden";
    } else if (this.props.shownUser.followees.includes(this.shownUser)) {
      return "unfollow-button";
    } else {
      return "follow-button";
    }
  }

  componentDidMount() {
    this.props.requestOneUser(this.props.shownUserId)
    .then(this.props.requestUserFrames(this.props.shownUserId));
  }

  render() {
    if (!this.props.shownUser) {
      return null;
    }
    else {
      return (
        <div>
          <UserDetails
            onSelection={this.onSelection}
            buttonText={this.buttonText()}
            buttonClass={this.buttonClass()}
            shownUser={this.props.shownUser}
          />
        <FramesIndex
          shownUser={this.props.shownUser}
        />
        </div>
      );
    }
  }
}

export default withRouter(UserShow);
