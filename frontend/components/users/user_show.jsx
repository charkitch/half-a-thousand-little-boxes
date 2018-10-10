import React from 'react';
import { withRouter } from 'react-router';

import FramesIndex from '../frames/index/frames_index_container';
import UserDetails from './user_details';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOneUser(this.props.shownUserId)
    .then(this.props.requestUserFrames(this.props.shownUserId));
  }

  render() {
    if (!this.props.shownUser) {
      return null;
    }
    else {
      return (
        <div>
          <UserDetails
            shownUser={this.props.shownUser}
            followStatus={this.props.followStatus}
          />
        <FramesIndex
          shownUser={this.props.shownUser}
        />
        </div>
      );
    }
  }
}

export default withRouter(UserShow);



// onSelection={this.onSelection}
// buttonText={this.buttonText()}
// buttonClass={this.buttonClass()}
