import React from 'react';
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
        <img className="user-avatar"
          src={window.userIcon}
          atl="default user icon"/>
        <div className="shown-user-name">{shownUser.username}</div>
      </div>
      <FollowButtonContainer
        className="follow-button-container"
        followStatus={followStatus}
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
