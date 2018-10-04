import React from 'react';
import FramesIndex from '../frames/frames_index_container';
import { withRouter } from 'react-router';
import UserDetails from './user_details';
import UserNav from './user_nav';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.shownUser = parseInt(this.props.match.params.id);
    this.onSelection = this.onSelection.bind(this);
  }


  onSelection() {
    if (this.props.followees.includes(this.shownUser)) { // user not following
      (this.props.deleteFollow(this.shownUser));
    } else {
      this.props.createFollow(this.shownUser);
    }
  }

  buttonText() {
    if (this.props.followees.includes(this.shownUser)) {
      return "Unfollow";
    } else {
      return "Follow";
    }
  }


  buttonClass() {
    if (this.shownUser === this.props.currentUser) {
      return "hidden";
    } else if (this.props.followees.includes(this.shownUser)) {
      return "unfollow-button";
    } else {
      return "follow-button";
    }
  }

  componentDidMount() {
    this.props.requestOneUser(this.shownUser)
    .then(this.props.requestUserFrames(this.shownUser));
  }

  render() {
    if (!this.props.users[this.shownUser]) {
      return null;
    }
    else {
      return (
        <div>
          <UserDetails
            onSelection={this.onSelection}
            buttonText={this.buttonText()}
            buttonClass={this.buttonClass()}
            shownUser={this.props.users[this.shownUser]}
          />
        <FramesIndex frames={this.props.frames} shownUser={this.shownUser}/>
        </div>
      );
    }
  }
}

export default withRouter(UserShow);
