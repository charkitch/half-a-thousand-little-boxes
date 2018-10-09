import React from 'react';

import FollowButton from '../../users/follow_button_container';


class FrameShowDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOneFrame(this.props.shownFrame.id);
  }

  render() {
    let make;
    let model;
    let focalLength;
    let exposureTime;
    let iso;

    if (this.props.shownFrame.make) {
      make = this.props.shownFrame.make;
    }
    if (this.props.shownFrame.model) {
      model = this.props.shownFrame.model;
    }

    if (this.props.shownFrame.exif) {
      if (this.props.shownFrame.exif.focal_length_in_35mm_film) {
        focalLength = this.props.shownFrame.exif.focal_length_in_35mm_film;
      }
      if (this.props.shownFrame.exif.exposure_time) {
        exposureTime = this.props.shownFrame.exif.exposure_time;
      }
      if (this.props.shownFrame.exif.iso_speed_ratings) {
        iso = this.props.shownFrame.exif.iso_speed_ratings;
      }
    }

    make = make || '';
    model = model || '';
    focalLength = focalLength || '';
    exposureTime = exposureTime || '';
    iso = iso || '';


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
              <div>
                <img className="user-avatar-frame-show"
                  src={window.userIcon}
                  atl="default user icon"/>
              </div>
              <div className="user-text-frame-show">
                <div className="username">{this.props.photographer.username}</div>
                <FollowButton
                  className="follow-button-frame-show"
                  shownUser={this.props.photographer.id}
                />
            </div>
          </div>
          <div className="photo-details">
            <div className="photo-text-boxes">
              <h2>{this.props.shownFrame.title}</h2>
              <p>{this.props.shownFrame.caption}</p>
            </div>
            <div>

            </div>
            <div className="metadata-display">
              <div>{make} {model}</div>
              <div>{`Focal length: ${focalLength}`}</div>
              <div>{`Exposure: ${exposureTime}`}</div>
              <div>{`ISO: ${iso}`}</div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default FrameShowDetails;
