import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { sendPhoto } from '../../actions/frames_actions';
import UserAcknowledgement from './user_acknowledgement';
import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    sendPhoto: (frame) => dispatch(sendPhoto(frame)),
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
