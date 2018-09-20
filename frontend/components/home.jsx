import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className='home-whole-container'>
    <img src={} className="following-appeal-image" alt="Please upload photos to us so we can tell the VCs!"/>
      <div className="following-feed-appeal">
        <h4 className="home-center-headline">What's the best picture you've taken lately?</h4>
        <p className="home-center-subheadline">Share it with the HATLB community</p>
      </div>
      <h1 className="splash-center-headline"></h1>
  </div>
);



export default Home;


    <img src={window.splash} className="splash-image" alt='A bear walking into a chasm along a shore in Alaska.'/>
    <div className='appeal'>
      <h1 className="splash-center-headline">Get inspired and share your best photos</h1>
      <h2 className="splash-center-sub">Find your home among the world's best photographers</h2>
      <Link className="splash-center-join" to="signup">Join HATLB</Link>
    </div>
