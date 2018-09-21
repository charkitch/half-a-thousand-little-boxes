import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { requestUserFrames } from '../../actions/frames_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';
import  UserShow  from './user_show';
import { requestOneUser } from "../../actions/user_actions";
import { createFollow, deleteFollow } from "../../actions/following_actions";


const mapDispatchToProps = dispatch => {
  return {
    requestOneUser: (id) => dispatch(requestOneUser(id)),
    requestUserFrames: (id) => dispatch(requestUserFrames(id)),
    createFollow: (id) => dispatch(createFollow(id)),
    deleteFollow: (id) => dispatch(deleteFollow(id)),
  };
};


const mapStateToProps = (state) => {
  return {
    frames: state.entities.frames,
    users: state.entities.users,
    followees: state.entities.followees
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(UserShow);
