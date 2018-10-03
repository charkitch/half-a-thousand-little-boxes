import React from 'react';
import { withRouter } from 'react-router';
import FollowButton from '../users/follow_button_container';

function frameShowUserInfo({photographer}) {
    return (
      <div>
        <div>{photographer.username}</div>
        <FollowButton shownUser={photographer.id} />
      </div>
    );
}

export default (frameShowUserInfo);
