import React from 'react';

const timeAgo = (createdAt) => {
  let hoursAgo = new Date(new Date() - new Date(createdAt)).getHours();
  if (hoursAgo < 24) {
    return "about " + String(hoursAgo) + " hours ago";
  } else {
    return String(hoursAgo/24) + " days ago";
  }
};

export default function photographerDetails (props) {
  if (!props.photographer) {
    return null;
  }
  return (
  <div className="photographer-detail">
    <img className='followee-avatar' src={window.userIcon} alt="default user icon"/>
    <div className='text-detail'>
      <p>{props.photographer.username}</p>
      <p>{timeAgo(props.createdAt)}</p>
    </div>
  </div>
);}
