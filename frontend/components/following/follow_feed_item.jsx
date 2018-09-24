import React from 'react';
import { withRouter } from 'react-router'

import PhotographerDetails from './photographer_details';
import PictureDetails from './picture_details';

class FollowFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleFrameClick = this.handleFrameClick.bind(this);
    this.handlePhotographerClick = this.handlePhotographerClick.bind(this);
  }

  handleFrameClick() {
    this.props.history.push(`/frames/${this.props.frame.id}`);
  }

  handlePhotographerClick() {
    this.props.history.push(`/users/${this.props.photographer.id}`);
  }


  render() {
    return (
      <div className="follow-feed-item">
        <PhotographerDetails
          photographer={this.props.photographer}
          createdAt={this.props.frame.created_at}
          onClick={this.props.handlePhotographerClick}
        />
      <div className="picture-container" onClick={this.handleFrameClick}>
          <img src={this.props.frame.awsLocale}></img>
        </div>
          <PictureDetails
            title={this.props.frame.title}
            caption={this.props.frame.caption}
            />
        <div>
        </div>
      </div>
    );
  }
}

export default withRouter(FollowFeedItem);
