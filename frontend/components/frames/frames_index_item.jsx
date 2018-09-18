import React from 'react';
import { withRouter } from 'react-router'

class FramesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    debugger
    this.props.history.push(`/frames/${this.props.frame.id}`);
  }

  render() {
    return (
      <li className="frames-user-index-item" onClick={this.handleClick} >
        <div className="">
          <img src={this.props.frame.awsLocale}></img>
        </div>
      </li>
    );
  }
}

export default withRouter(FramesIndexItem);
