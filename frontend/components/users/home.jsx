import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  handleUploadClick(e) {
    e.preventDefault();
    this.props.openModal(UPLOAD_FILE_SELECT);
  }

  render() {
      return (
        <div className='home-whole-container'>
          <img src={window.homeAppeal} className="following-appeal-image" alt="Please upload photos to us so we can tell the VCs!"/>
          <div className="appeal following-feed-appeal">
            <h4 className="home-center-headline">Keep an eye out for good photos!</h4>
            <p className="home-center-sub">Share them with the HATLB community</p>
            <button type="submit" className="upload-input-appeal" onClick={this.handleUploadClick}>
              <span className="upload-Button-text">Upload now!</span>
            </button>
          </div>
        </div>
      );
    }
  }

export default Home;
