import React from 'react';
import { withRouter } from 'react-router';

class FrameShow extends React.Component {
  constructor(props) {
    super(props);
    this.frameId = parseInt(props.match.params.id);
  }


  componentDidMount() {

  }

  render() {
      return (
          <div className="frame-show-image-container">
            <img classname="image-show" src={this.props.frame.awsLocale}></img>
          </div>
      );
    }
  }

export default withRouter(FrameShow);


//eventually dispatch a follow action
//toggle follow status
//that's why it's a component but wont be neede for a bit
