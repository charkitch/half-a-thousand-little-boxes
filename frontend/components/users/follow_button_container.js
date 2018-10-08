import { connect } from 'react-redux';

import { createFollow, deleteFollow } from "../../actions/following_actions";
import FollowButton from './follow_button';

const mapDispatchToProps = dispatch => {
  return {
    createFollow: (id) => dispatch(createFollow(id)),
    deleteFollow: (id) => dispatch(deleteFollow(id)),
  };
};


const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    shownUser: ownProps.shownUser,
    followStatus: ownProps.followStatus,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FollowButton);
