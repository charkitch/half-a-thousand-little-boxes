import React from 'react';

export default function photographer_details (photographer, timestamp) {
  return (
  <div className="photographer-detail">
    <img className='followee-avatar' src={window.userIcon} alt="default user icon"/>
    <p>Photographer Name</p>
    <p>so many hours ago</p>
  </div>
);}


// <div>{photographer.username}</div>
// <div>{timestamp}</div>
