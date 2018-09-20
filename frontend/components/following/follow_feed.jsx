import React from 'react';
import FollowFeedItem from './follow_feed_item';

class FollowFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (this.props.follows.length === 0) {
    //     return FollowImpertive!
    // }
    return (
      <div className="feed-storage-box">
        <p>Hello?</p>
        <ul className="feed-storage-list">
          {this.props.followees.map( followeId => <FollowFeedItem followeeId={followeeId} key={`followee-${followeeId}`}/>)}
        </ul>
      </div>
    );
  }
}

export default FollowFeed;
