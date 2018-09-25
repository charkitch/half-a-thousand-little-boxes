import React from 'react';
import { UPLOAD_FILE_SELECT } from '../../actions/modal_actions';
import FollowFeed from '../following/follow_feed_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleUploadClick = this.handleUploadClick.bind(this);
  }

  handleUploadClick(e) {
    e.preventDefault();
    this.props.openModal(UPLOAD_FILE_SELECT);
  }

  render() {
      return (
        <div className='home-whole-container'>
          <img
            src={window.homeAppeal}
            className="following-appeal-image"
            alt="Please upload photos to us so we can tell the VCs!"
          />
          <div className="following-feed-appeal">
            <h4 className="home-center-headline">
              Keep an eye out for good photos!
            </h4>
            <p className="home-center-sub">
              Share them with the HATLB community
            </p>
            <button
              type="submit"
              className="upload-input-appeal clickable"
              onClick={this.handleUploadClick}>
              <span className="upload-Button-text">Upload now!</span>
            </button>
          </div>
          <FollowFeed/>
        </div>
      );
    }
  }

export default Home;
