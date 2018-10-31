import React from 'react';
import { Link, withRouter } from 'react-router';
import FrameIndexItemImage from './frame_index_item_image';
import AbstractImageBox from '../util/image_box';

class FramesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/frames/${this.props.frame.id}`);
  }

  render() {
    let w = this.props.frame.width || 300;
    let h = this.props.frame.height || 200;
    return (
        <div className="frames-user-index-item"
            style={{width: w*200/h +'px', flexGrow: w*200/h}}
            onClick={this.handleClick}
          >
          <i style={{paddingBottom: h/w * 100 + `%`}}></i>
          <AbstractImageBox shownFrame={this.props.frame} className={"index-image"} />
        </div>
    );
  }
}
// <FrameIndexItemImage shownFrame={this.props.frame} />
// <AbstractImageBox className="index-image" shownFrame={this.props.frame} />


export default withRouter(FramesIndexItem);
