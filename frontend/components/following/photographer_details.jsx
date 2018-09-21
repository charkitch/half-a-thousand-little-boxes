import React from 'react';

export default function photographerDetails (props) {
  if (!props.photographer) {
    return null;
  }
  return (
  <div className="photographer-detail">
    <img className='followee-avatar' src={window.userIcon} alt="default user icon"/>
    <div className='text-detail'>
      <p>{props.photographer.username}</p>
      <p>{props.createdAt}</p>
    </div>
  </div>
);}
