import React from 'react';

import FollowFeedItem from './follow_feed_item';

class FollowFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    for (var i = 0; i < this.props.currentUser.followees.length; i++) {
      this.props.requestUserFrames(this.props.currentUser.followees[i]);
      this.props.requestOneUser(this.props.currentUser.followees[i]);
    }
  }

  render() {
    return (
      <div className="feed-storage-box">
        <div className="feed-storage-list">
          {Object.values(this.props.frames).map( frame =>
            <FollowFeedItem
              key={frame.id}
              frame={frame}
              photographer={this.props.users[frame.photographer_id]}/>
          )}
        </div>
      </div>
    );
  }
}

export default FollowFeed;


// {Object.values(this.props.frames).map( frame =>
//   (<FollowFeedItem
//     frame={frame}
//     photographer={this.props.users[frame.photographerId]}/>))}
