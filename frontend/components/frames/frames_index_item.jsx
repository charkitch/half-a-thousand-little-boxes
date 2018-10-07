import React from 'react';
import { withRouter } from 'react-router';

class FramesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/frames/${this.props.frame.id}`);
  }

  render() {
    debugger
    return (
        <div className="frames-user-index-item">
          <img className="index-image"
               src={this.props.frame.awsLocale}
          >
          </img>
        </div>
    );
  }
}

export default withRouter(FramesIndexItem);
