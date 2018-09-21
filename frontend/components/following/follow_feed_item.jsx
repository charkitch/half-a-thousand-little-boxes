import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { requestOneUser } from '../../actions/user_actions';
import PhotographerDetails from './photographer_details';
import { PictureDetails } from './picture_details';

class FollowFeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/frames/${this.props.frame.id}`);
  }



  render() {
    return (
      <div className="follow-feed-item">
        <PhotographerDetails/>
        <div className="picture-container">

        </div>
        <PictureDetails/>
        <div>
        </div>
      </div>
    );
  }
}
// <img src={this.props.frame.awsLocale}/>

const mapDispatchToProps = dispatch => {
  return {
    requestOneUser: id => dispatch(requestOneUser(id))
  };
};


const mapStateToProps = (state) => {
  return {

  };
};



export default connect(mapStateToProps, mapDispatchToProps)(FollowFeedItem);
