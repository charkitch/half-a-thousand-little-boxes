import React from 'react';
import { withRouter } from 'react-router';
import FrameShowUserInfo from './frame_show_user_info';

class FrameShow extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    if (!this.props.shownFrame) {
      this.props.requestOneFrame(this.props.shownId);
    }
  }

  render() {
    if (!this.props.shownFrame) {
      return null;
    } else {
        return (
            <div className="frame-show-container">
              <div className="image-container">
                <img className="image-show" src={this.props.shownFrame.awsLocale}/>
              </div>
              <div className="frame-show-side-box">
              </div>
              <FrameShowUserInfo photographerId={this.props.shownFrame.photographer_id}/>
            </div>
        );
      }
    }
  }

export default FrameShow;
