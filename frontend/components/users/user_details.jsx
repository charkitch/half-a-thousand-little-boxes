import React from 'react';

import AvatarDisplay from './avatar/avatar_display';
import FollowButtonContainer from './follow_button_container';

const UserDetails = ({
  shownUser,
  onSelection,
  buttonClass,
  buttonText,
  followStatus
}) => {
  return (
    <div className="profile-info-box">
      <div className="user-container">
        <AvatarDisplay shownUser={shownUser} />
        <div className="shown-user-name">{shownUser.username}</div>
      </div>
      <FollowButtonContainer
        followStatus={followStatus}
        className="follow-button-user-show"
        shownUser={shownUser}/>
    </div>
  );
};


export default UserDetails;




// <div
//   onClick={onSelection}
//   className={`follow-button-container clickable ${buttonClass}`}
//   >{buttonText}
// </div>
