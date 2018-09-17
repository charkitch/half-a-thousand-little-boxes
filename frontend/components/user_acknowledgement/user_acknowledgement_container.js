import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { sendPhoto } from '../../actions/frames_actions';
import UserAcknowledgement from './user_acknowledgement';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
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
