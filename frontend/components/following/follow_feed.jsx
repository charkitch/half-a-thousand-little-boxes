import React from 'react';
import FollowFeedItem from './follow_feed_item';

class FollowFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    for (var i = 0; i < this.props.followees.length; i++) {
      this.props.requestUserFrames(this.props.followees[i]);
      this.props.requestOneUser(this.props.followees[i]);
    }
  }

  render() {
    return (
      <div className="feed-storage-box">
        <ul className="feed-storage-list">
          {Object.values(this.props.frames).map( frame =>
            <FollowFeedItem
              key={frame.id}
              frame={frame}
              photographer={this.props.users[frame.photographer_id]}/>
          )}
        </ul>
      </div>
    );
  }
}

export default FollowFeed;


// {Object.values(this.props.frames).map( frame =>
//   (<FollowFeedItem
//     frame={frame}
//     photographer={this.props.users[frame.photographerId]}/>))}
