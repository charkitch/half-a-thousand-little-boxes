import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import FramesIndex from './frames_index';
import { createFrame } from '../../../actions/frame_actions';
import {
  getFrames, getFramesByPhotographerId
} from '../../../reducers/root_reducer';
import { openModal } from '../../../actions/modal_actions';


const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
  };
};

const mapStateToProps = (state, ownProps) => {
  let frames = getFramesByPhotographerId(state, ownProps.shownUser.id);
  return {
    frames: getFramesByPhotographerId(state, ownProps.shownUser.id)
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(FramesIndex));
