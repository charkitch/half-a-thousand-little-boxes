import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';

import { createFrame } from '../../actions/frame_actions';
import { openModal } from '../../actions/modal_actions';
import UserAcknowledgement from './user_acknowledgement';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    createFrame: (frame) => dispatch(createFrame(frame)),
  };
};


const mapStateToProps = (state, ownProps) => {
  return {
    whereWeAt: ownProps.location.pathname,
    currentUser: state.entities.users[state.session.id],
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(UserAcknowledgement));
