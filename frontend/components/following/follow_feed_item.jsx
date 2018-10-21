import React from 'react';

import { Link, withRouter } from 'react-router';

import FollowFeedItemImage from './follow_feed_item_image';
import PhotographerDetails from './photographer_details';
import PictureDetails from './picture_details';

class FollowFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleFrameClick = this.handleFrameClick.bind(this);
  }

  handleFrameClick() {
    this.props.history.push(`/frames/${this.props.frame.id}`);
  }

  render() {
    return (
      <div className="follow-feed-item">
        <PhotographerDetails
          photographer={this.props.photographer}
          createdAt={this.props.frame.created_at}
        />
        <div className="picture-container" onClick={this.handleFrameClick}>
            <FollowFeedItemImage shownFrame={this.props.frame} />
        </div>
        <PictureDetails
          title={this.props.frame.title}
          caption={this.props.frame.caption}
        />
      </div>
    );
  }
}

export default withRouter(FollowFeedItem);
