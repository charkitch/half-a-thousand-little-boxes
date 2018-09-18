import React from 'react';
import { Link } from 'react-router-dom';


class FrameIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/frames/${this.props.frame.id}`);
  }

  render() {
    return (
      <li className="frames-index-item" onClick={this.handleCLick} >
        <div className="index-item-details">
          <img src="{awsLocale}"></img>
        </div>
      </li>
    );
  }
}

export default FrameIndexItem;
