import React from 'react';


const PictureDetails = ({ title, caption }) => (
  <div>
    <h1 className="photo-title">{title}</h1>
    <p className="photo-caption">{caption}</p>
  </div>
);

export default PictureDetails;
