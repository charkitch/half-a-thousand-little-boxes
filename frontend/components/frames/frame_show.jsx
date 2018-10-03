import React from 'react';
import { withRouter } from 'react-router';
// import UserInfoBox from './frame_show_user_info';

class FrameShow extends React.Component {
  constructor(props) {
    super(props);
    this.frameId = parseInt(props.match.params.id);
  }


  componentDidMount() {
    if (!this.props.frames[this.frameId]) {
      this.props.requestOneFrame(this.frameId);
    }

  }

  render() {
    let currentFrame = this.props.frames[this.frameId];
    if (!currentFrame) {
      return null;
    } else {
        return (
            <div className="frame-show-container">
              <div className="image-container">
                <img className="image-show" src={currentFrame.awsLocale}/>
              </div>
              < FrameShowUserInfo
                photographer={this.props.users[this.frameId.photographer_id]
              }/>
            </div>
        );
      }
    }
  }

export default withRouter(FrameShow);
