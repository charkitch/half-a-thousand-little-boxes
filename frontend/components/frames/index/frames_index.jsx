import React from 'react';
import withRouter from 'react-router';

import FramesIndexItem from './frames_index_item';

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
          {Object.values(this.props.frames).map(frame => {
            return (<FramesIndexItem
              frame={frame}
              key={`frame-${frame.id}`}
              />);
            })
          }
      </div>
    );
  }
}

export default FramesIndex;
