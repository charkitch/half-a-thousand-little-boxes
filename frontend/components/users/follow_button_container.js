import { connect } from 'react-redux';
import { createFollow, deleteFollow } from "../../actions/following_actions";
import FollowButton from './follow_button';

const mapDispatchToProps = dispatch => {
  return {
    createFollow: (id) => dispatch(createFollow(id)),
    deleteFollow: (id) => dispatch(deleteFollow(id)),
  };
};


const mapStateToProps = (state) => {
  return {
    users: state.entities.users,
    currentUser: state.session.id,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FollowButton);
