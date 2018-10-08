import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { createFollow, deleteFollow } from '../../actions/following_actions';
import { getUserById, getFollowStatus } from '../../reducers/root_reducer';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { requestOneUser } from '../../actions/user_actions';
import { requestUserFrames } from '../../actions/frame_actions';
import  UserShow  from './user_show';


const mapDispatchToProps = dispatch => {
  return {
    requestOneUser: (id) => dispatch(requestOneUser(id)),
    requestUserFrames: (id) => dispatch(requestUserFrames(id)),
    createFollow: (id) => dispatch(createFollow(id)),
    deleteFollow: (id) => dispatch(deleteFollow(id)),
  };
};


const mapStateToProps = (state, ownProps) => {
  let userId = parseInt(ownProps.match.params.id);
  let shownUser = getUserById(state, userId);
  return {
    shownUserId: userId,
    followStatus: getFollowStatus(state, userId),
    shownUser: shownUser,
    currentUser: getUserById(state, state.session.id),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(UserShow));
