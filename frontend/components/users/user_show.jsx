import React from 'react';
import { withRouter } from 'react-router';

import FramesIndex from '../frames/frames_index_container';
import UserDetails from './user_details';
import UserNav from './user_nav';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.onSelection = this.onSelection.bind(this);
  }


  onSelection() {
    if (this.props.followStatus) {
      (this.props.deleteFollow(this.shownUser));
    } else {
      this.props.createFollow(this.shownUser);
    }
  }

  buttonText() {
    if (this.props.followStatus) {
      return "Unfollow";
    } else {
      return "Follow";
    }
  }


  buttonClass() {
    if (this.props.shownUser === this.props.currentUser) {
      return "hidden";
    } else if (this.props.followStatus) {
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
            shownUser={this.props.shownUser}
            followStatus={this.props.followStatus}
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



// onSelection={this.onSelection}
// buttonText={this.buttonText()}
// buttonClass={this.buttonClass()}
