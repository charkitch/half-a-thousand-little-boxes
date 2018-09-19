import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createFrame } from '../../actions/frames_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';
import FramesIndex from './frames_index';

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
  };
};


const mapStateToProps = (state) => {
  return {
    frames: state.entities.frames,
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(FramesIndex));
