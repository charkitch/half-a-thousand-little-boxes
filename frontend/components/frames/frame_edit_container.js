import { connect } from 'react-redux';
import { editFrame } from '../../actions/frames_actions';
import FrameEdit from './frame_edit_form';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FrameEdit);
