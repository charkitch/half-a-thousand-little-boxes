import React from 'react';
import FramesIndex from '../frames/frames_index_container';
import { withRouter } from 'react-router';
import UserDetails from './user_details';
import UserNav from './user_nav';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.userId = parseInt(this.props.match.params.id);
    this.onSelection = this.onSelection.bind(this);
  }

  componentDidMount() {
    this.props.requestOneUser(this.userId)
      .then(this.props.requestUserFrames(this.userId));
  }

  onSelection() {
    if (this.props.followees.includes(this.userId)) { // user not following
      (this.props.deleteFollow(this.userId));
    } else {
      this.props.createFollow(this.userId);
    }
  }

  buttonText() {
    if (this.props.followees.includes(this.userId)) {
      return "Unfollow";
    } else {
      return "Follow";
    }
  }


  buttonClass() {
    if (this.userId === this.props.currentUser) {
      return "hidden";
    } else if (this.props.followees.includes(this.userId)) {
      return "unfollow-button";
    } else {
      return "follow-button";
    }
  }

  render() {
    if (!this.props.users[this.userId]) {
      return null;
    }
    else {
      return (
        <div>
          <UserDetails
            onSelection={this.onSelection}
            buttonText={this.buttonText()}
            buttonClass={this.buttonClass()}
            shownUser={this.props.users[this.userId]}
          />

          <FramesIndex frames={this.props.frames}/>
        </div>
      );
    }
  }
}

export default withRouter(UserShow);

// requestOneUser(this.props.match.params.id)
