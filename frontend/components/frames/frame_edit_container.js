import { connect } from 'react-redux';
import { editFrame } from '../../actions/frames_actions';
import FrameEdit from './frame_edit_form';
import { withRouter } from 'react-router'

const mapDispatchToProps = dispatch => {
  return {
    editFrame: (frame) => dispatch(editFrame(frame)),
  };
};


const mapStateToProps = (state) => {
  debugger
  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(FrameEdit));
