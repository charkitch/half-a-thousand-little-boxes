import { connect } from 'react-redux';

import FollowFeed from './follow_feed';
import { requestUserFrames } from '../../actions/frame_actions';
import { requestOneUser } from '../../actions/user_actions';
import { getCurrentUser } from '../../reducers/root_reducer';

const mapDispatchToProps = dispatch => {
  return {
    requestUserFrames: id => dispatch(requestUserFrames(id)),
    requestOneUser: id => dispatch(requestOneUser(id))
  };
};


const mapStateToProps = (state) => {
  return {
    currentUser: getCurrentUser(state),
    frames: state.entities.frames,
    users: state.entities.users,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FollowFeed);
