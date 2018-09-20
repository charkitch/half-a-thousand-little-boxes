import React from 'react';
import { withRouter } from 'react-router';
import PhotographerDetails from './photographer_details';
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
    return (
      <div className="follow-feed-item">
        <div className="photographer ">
          <p></p>
        </div>
      </div>
    );
  }
}

export default FollowFeedItem
