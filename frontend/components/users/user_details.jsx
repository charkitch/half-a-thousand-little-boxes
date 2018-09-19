import React from 'react';

const UserDetails = ({shownUser}) => {
  return (
    <div>
      <p>{shownUser.username}</p>
    </div>
  );
};

export default UserDetails;
