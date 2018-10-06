import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';

import FramesIndex from './frames_index';
import { createFrame } from '../../actions/frame_actions';
import { openModal } from '../../actions/modal_actions';
import {
  getFrames, getFramesByPhotographerId
} from '../../reducers/root_reducer';


const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    frames: getFramesByPhotographerId(state, ownProps.shownUser),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(FramesIndex));
