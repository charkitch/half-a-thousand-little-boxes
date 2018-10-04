import React from 'react';
import { withRouter } from 'react-router';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.followStatus = props.users[props.currentUser]
      .followees.includes(props.shownUser);
    this.onSelection = this.onSelection.bind(this);
  }

  onSelection() {
    if (this.followStatus) {
      (this.props.deleteFollow(this.props.shownUser));
    } else {
      this.props.createFollow(this.props.shownUser);
    }
  }

  buttonText() {
    if (this.followStatus) {
      return "Unfollow";
    } else {
      return "Follow";
    }
  }


  buttonClass() {
    if (this.props.shownUser === this.props.currentUser) {
      return "hidden";
    } else if (this.followStatus) {
      return "unfollow-button";
    } else {
      return "follow-button";
    }
  }


  render() {
    if (!this.props.shownUser) {
      return null;
    }
    else {
      return (
        <div>
          <div
            onClick={this.onSelection}
            className={`follow-button-container clickable ${this.buttonClass()}`}
            >{this.buttonText()}</div>
        </div>
      );
    }
  }
}

export default withRouter(FollowButton);
