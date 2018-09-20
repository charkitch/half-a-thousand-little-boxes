import React from 'react';

const photographer_details = (photographer, timestamp) => (
  <div className="photographer detail">
    <img className='followee-avatar' src={window.userIcon} alt="default user icon"/>
    <div>{photographer.username}</div>
    <div>{timestamp}</div>
  </div>
);
