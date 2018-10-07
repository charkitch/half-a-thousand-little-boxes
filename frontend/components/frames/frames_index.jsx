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
    debugger
    if (this.props.frames.length === 0) {
        return null;
    }
    return (
      <div className="photo-storage-box">
        <ul className="frames-user-ii-holder">
          {Object.values(this.props.frames).map(
            frame => <FramesIndexItem
            frame={frame}
            key={`frame-${frame.id}`}
            />)}
        </ul>
      </div>
    );
  }
}

export default FramesIndex;
