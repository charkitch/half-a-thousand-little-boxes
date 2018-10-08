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
    let w = this.props.frame.width || 300;
    let h = this.props.frame.height || 200;
    return (
        <div className="frames-user-index-item"
            style={{width: w*200/h +'px', flexGrow: w*200/h}}
          >
          <i style={{paddingBottom: h/w * 100 + `%`}}></i>
          <img className="index-image"
               src={this.props.frame.awsLocale}
          >
          </img>
        </div>
    );
  }
}


export default withRouter(FramesIndexItem);
