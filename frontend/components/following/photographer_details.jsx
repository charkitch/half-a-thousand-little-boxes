import React from 'react';
import { Link } from 'react-router-dom';

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
    <Link to={`/users/${photographer.id}`} className='author-link'>
      <img
        className='followee-avatar clickable'
        src={window.userIcon}
        alt="default user icon"
      />
      <div className='text-detail clickable'>
        <p>{photographer.username}</p>
        <p>{timeAgo(createdAt)}</p>
      </div>
    </Link>
  </div>
);}
