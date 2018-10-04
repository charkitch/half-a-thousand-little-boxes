import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createFrame } from '../../actions/frame_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';
import {
  getFrames, getFramesByPhotographerId
} from '../../reducers/root_reducer';
import FramesIndex from './frames_index';


const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
  };
};

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    frames: getFramesByPhotographerId(state, ownProps.shownUser),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(FramesIndex));
