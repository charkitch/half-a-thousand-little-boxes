import { connect } from 'react-redux';
import React from 'react';

import FollowButton from '../users/follow_button_container';
import { getUserById } from '../../reducers/root_reducer';


function FrameShowDetails(props) {
  debugger;
    return (
      <div className="user-info-box">
        <div>
          <img className="user-avatar-frame-show"
            src={window.userIcon}
            atl="default user icon"/>
        </div>
        <div className="user-text-frame-show">
          <div>{props.photographer.username}</div>
          <FollowButton
            className="follow-button-frame-show"
            shownUser={props.photographer.id}
          />
        <div className="metadata-display">
          <div>{props.shownFrame.make}</div>
          <div>{props.shownFrame.model}</div>
          <div>{props.shownFrame.exif.focal_length_in_35mm_film}</div>
          <div></div>
          <div>{props.shownFrame.exif.iso_speed_ratings}</div>
        </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  let photographerId = ownProps.photographerId;
  return {
    photographer: getUserById(state, photographerId),
  };
};

export default connect(mapStateToProps)(FrameShowDetails);
