import { Link, withRouter } from 'react-router';
import React from 'react';

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
            <img src={this.props.frame.awsLocale}></img>
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
