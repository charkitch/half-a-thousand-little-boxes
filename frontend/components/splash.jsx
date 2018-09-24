import React from 'react';
import { Link } from 'react-router-dom';

const splash = () => (
  <div className="splash-container">
    <img src={window.splash} className="splash-image appeal-image" alt='A bear walking into a chasm along a shore in Alaska.'/>
    <div className='appeal'>
      <h1 className="appeal-center-headline">Get inspired and share your best photos</h1>
      <h2 className="appeal-center-sub">Find your home among the world's best photographers</h2>
      <Link className="splash-center-join" to="signup">Join HATLB</Link>
    </div>
  </div>
);

export default splash;
