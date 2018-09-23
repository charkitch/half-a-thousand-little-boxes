import React from 'react';

function timeAgo(createdAt) {
  let hoursAgo = Math.floor((new Date() - new Date(createdAt)) / 1000 / 60/ 60);
  if (hoursAgo < 24) {
    return "about " + String(hoursAgo) + " hours ago";
  } else {
    return String(Math.floor(hoursAgo/24)) + " days ago";
  }
}

export default function photographerDetails ({createdAt, photographer}) {
  if (!photographer) {
    return null;
  }
  return (
  <div className="photographer-detail">
    <img className='followee-avatar' src={window.userIcon} alt="default user icon"/>
    <div className='text-detail'>
      <p>{photographer.username}</p>
      <p>{timeAgo(createdAt)}</p>
    </div>
  </div>
);}
