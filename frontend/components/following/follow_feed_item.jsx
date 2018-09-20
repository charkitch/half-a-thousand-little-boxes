import React from 'react';
import { withRouter } from 'react-router';
//
class FollowFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/frames/${this.props.frame.id}`);
  }

  render() {
    debugger
    return (
      <div className="follow-feed-item">

      </div>
    );
  }
}
