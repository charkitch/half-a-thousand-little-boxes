import React from 'react';
import { withRouter } from 'react-router';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.onSelection = this.onSelection.bind(this);
  }

  onSelection() {
    if (this.props.followStatus) {
      (this.props.deleteFollow(this.props.shownUser.id));
    } else {
      this.props.createFollow(this.props.shownUser.id);
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
    if (this.props.shownUser.id === this.props.currentUserId) {
      return "hidden";
    } else if (this.props.followStatus) {
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
            className={`${this.props.className} clickable ${this.buttonClass()}`}
            >{this.buttonText()}</div>
        </div>
      );
    }
  }
}

export default withRouter(FollowButton);
