import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createFrame } from '../../actions/frame_actions';
import UserAcknowledgement from './user_acknowledgement';
import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    createFrame: (frame) => dispatch(createFrame(frame)),
  };
};


const mapStateToProps = (state) => {
  return {
   currentUser: state.entities.users[state.session.id],
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(UserAcknowledgement);
