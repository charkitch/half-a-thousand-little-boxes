import React from 'react';
import FramesShow from './frames_show';
import withRouter from 'react-router';

class FramesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.frames.length === 0) {
        return null;
    }
    return (
      <div className="photo-storage-box">
        <ul className="frames-user-ii-holder">
        </ul>
      </div>
    );
  }
}

export default FramesIndex;
