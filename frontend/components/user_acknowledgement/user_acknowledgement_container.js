import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserAcknowledgement from './user_acknowledgement';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dspatch(logout()),
  };
};


const mapStateToProps = (state) => {
  return {
   currentUser: state.entities.users[state.session.id],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAcknowledgement);
