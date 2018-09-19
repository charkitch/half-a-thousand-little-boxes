import React from 'react';
import { withRouter } from 'react-router';

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
            <div className="frame-show-image-container">
              <img classame="image-show" src={currentFrame.awsLocale}/>
            </div>
        );
      }
    }
  }

export default withRouter(FrameShow);


//eventually dispatch a follow action
//toggle follow status
//that's why it's a component but wont be neede for a bit
