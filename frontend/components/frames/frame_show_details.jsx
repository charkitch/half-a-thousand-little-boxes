import React from 'react';

import FollowButton from '../users/follow_button_container';


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
        <div>
          <img className="user-avatar-frame-show"
            src={window.userIcon}
            atl="default user icon"/>
        </div>
        <div className="user-text-frame-show">
          <div>{this.props.photographer.username}
          <FollowButton
            className="follow-button-frame-show"
            shownUser={this.props.photographer.id}
          />
        </div>
        <div className="metadata-display">
          <div>{make} {model}</div>
          <div>{`Focal length: ${focalLength}`}</div>
          <div>{`Exposure: ${exposureTime}`}</div>
          <div>{`ISO: ${iso}`}</div>
        </div>
        </div>
      </div>
      );
  }
}

export default FrameShowDetails;
