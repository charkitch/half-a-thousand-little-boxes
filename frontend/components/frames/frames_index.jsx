import React from 'react';
import FramesIndexItem from './frames_index_item';
import withRouter from 'react-router';

class FramesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    if (this.props.frames.length === 0) {
        return null;
    }
    return (
      <div className="photo-storage-box">
          {Object.values(this.props.frames).map(
            frame => <FramesIndexItem
            frame={frame}
            key={`frame-${frame.id}`}
            />)}
      </div>
    );
  }
}

export default FramesIndex;
