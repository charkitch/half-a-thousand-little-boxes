import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createFrame } from '../../actions/frames_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';
import FrameShow from './frame_show';

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
  };
};


const mapStateToProps = (state) => {
  debugger
  return {
    frames: state.entities.frames,
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(FrameShow));
