import React from 'react';
import FramesIndex from '../frames/frames_index_container';
import withRouter from 'react-router';
import UserDetails from './user_details';
import UserNav from './user_nav';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.userId = parseInt(this.props.match.params.id);
  }

  componentDidMount() {
    this.props.requestOneUser(this.userId).then(this.props.requestUserFrames(this.userId));
  }

  render() {
    if (!this.props.users[this.userId]) {
      return null;
    }
    else {
      return (
        <div>
          <UserDetails shownUser={this.props.users[this.userId]} />
          <FramesIndex frames={this.props.frames}/>
        </div>
      );
    }
  }
}

export default UserShow;

// requestOneUser(this.props.match.params.id)
