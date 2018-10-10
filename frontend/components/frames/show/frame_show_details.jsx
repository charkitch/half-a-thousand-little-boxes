import React from 'react';
import { Link } from 'react-router-dom';

import FollowButton from '../../users/follow_button_container';
import MetadataBox from './metadata';
import FakeAd from './fake_ad';


class FrameShowDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOneFrame(this.props.shownFrame.id);
  }

  render() {
    return (
      <div className="frame-show-side-box">
        <div className='fake-ad'>
          <img src="https://cdn4.buysellads.net/uu/1/21673/1538328304-Slack-pink_logo.png"
            alt="fake slack ad"
          />
        <FakeAd />
        </div>
        <div className='info-body'>
          <div className="frame-user-details-box">
            <Link to={`/users/${this.props.shownFrame.photographer_id}`}
                  className='author-link'
            >
              <div>
                <img className="user-avatar-frame-show"
                  src={window.userIcon}
                  alt="default user icon"/>
              </div>
              <div className="user-text-frame-show">
                <div className="username">{this.props.photographer.username}</div>
                <FollowButton
                  className="follow-button-frame-show"
                  shownUser={this.props.photographer.id}
                />
              </div>
            </Link>
          </div>
          <div className="photo-details">
            <div className="photo-text-boxes">
              <h2>{this.props.shownFrame.title}</h2>
              <p>{this.props.shownFrame.caption}</p>
            </div>
            <div>

            </div>
            <MetadataBox shownFrame={this.props.shownFrame} />
          </div>
        </div>
      </div>
      );
  }
}

export default FrameShowDetails;
