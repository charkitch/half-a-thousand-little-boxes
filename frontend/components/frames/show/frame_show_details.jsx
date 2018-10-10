import React from 'react';
import { Link } from 'react-router-dom';
import FollowButton from '../../users/follow_button_container';
import MetadataBox from './metadata';


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
          <div className="fake-ad-text">
            <a href="//srv.carbonads.net/ads/click/x/GTND42QIF6YIVKJMCW7LYKQMCKAIT2JUCA7I5Z3JCW7ILKJ7CVBIE23KC6BIC5QJC6BI6K3EHJNCLSIZ?segment=placement:500pxcom;"
               className="fake-ad-text"
               target="_blank" rel="noopener">
               It's teamwork, but simpler, more pleasant and more productive.
             </a>
             <p className="fake-ad-sub-text">Ads brought to you by Yves</p>
           </div>
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
