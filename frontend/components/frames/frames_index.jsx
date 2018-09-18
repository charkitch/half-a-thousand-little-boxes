import React from 'react';
import FramesIndexItem from './frames_index_item';
import withRouter from 'react-router';

class FramesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (frames.length === 0) {
      this.props.requestUserPhotos()
    }
  }

  render() {
    return (
      <div>
        <ul className="frames-user-ii-holder ">
          {this.props.frames.map( frame => <FramesIndexItem frame={frame} key={`frame-${frame.id}`}/>)}
        </ul>
      </div>
    );
  }
}

export default FramesIndex;
