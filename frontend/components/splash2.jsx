import React from 'react';
import { Link } from 'react-router-dom'

const splash = () => (
  <div className="splash-two-container">
    <h1 className="splash-center-appeal-headline">Get inspired and share your best photos</h1>
    <h2 className="splash-center-appeal-sub">Find your home among the world's best photographers</h2>
    <Link className="splash-center-appeal-join" to="signup">Join HATLB</Link>
  </div>
);

export default splash;
