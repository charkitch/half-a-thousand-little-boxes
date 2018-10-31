import React from 'react';
import { withRouter } from 'react-router';

import AbstractImageBox from '../util/image_box';
import FrameShowImage from './frame_show_image';
import FrameShowDetails
 from './frame_show_details_container';



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
                <AbstractImageBox
                  shownFrame={this.props.shownFrame}
                  className="image-show"
                  />
              </div>
              <FrameShowDetails
                shownFrame={this.props.shownFrame}
                photographerId={this.props.shownFrame.photographer_id}
              />
            </div>
        );
      }
    }
  }
  // <FrameShowImage shownFrame={this.props.shownFrame} />

export default FrameShow;
