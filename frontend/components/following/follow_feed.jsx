import React from 'react';
import FollowFeedItem from './follow_feed_item';

class FollowFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feed-storage-box">
        <ul className="feed-storage-list">
          {this.props.followees.map( followeeId => <FollowFeedItem followeeId={followeeId} key={`followee-${followeeId}`}/>)}
        </ul>
      </div>
    );
  }
}

export default FollowFeed;
