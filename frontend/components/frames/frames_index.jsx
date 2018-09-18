import React from 'react';
import FrameIndexItem from './frame_index_item';
import withRouter from 'react-router';

class FrameIndex extends React.Component {
  constructor(props) {
    debugger
    super(props);
  }

  componentDidMount() {
    if (frames.length === 0) {
      this.props.requestUserPhotos()
    }
  }

  render() {
    debugger
    return (
      <ul>
        {this.props.frames.map( frame =>  <FrameIndexItem frame={frame} key={`frame-${frame.id}`}/>)}
      </ul>
    );
  }
}

export default FrameIndex;
