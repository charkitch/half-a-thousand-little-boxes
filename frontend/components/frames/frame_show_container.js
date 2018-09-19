import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createFrame } from '../../actions/frames_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';
import FrameShow from './frame_show';
import { requestOneFrame } from './../../actions/frames_actions';

const mapDispatchToProps = dispatch => {
  return {
    requestOneFrame: id => dispatch(requestOneFrame(id))
  };
};


const mapStateToProps = (state) => {
  return {
    frames: state.entities.frames,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FrameShow);
