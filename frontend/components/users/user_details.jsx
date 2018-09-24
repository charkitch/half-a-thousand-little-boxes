import React from 'react';

const UserDetails = ({shownUser, onSelection, buttonClass, buttonText}) => {
  return (
    <div className="profile-info-box">
      <div>
        <img className="user-avatar"
          src={window.userIcon}
          atl="default user icon"/>
      </div>
      <div className="shown-user-name">{shownUser.username}</div>
      <div
        onClick={onSelection}
        className={`follow-button-container clickable ${buttonClass}`}
        >{buttonText}
      </div>
    </div>
  );
};



export default UserDetails;
