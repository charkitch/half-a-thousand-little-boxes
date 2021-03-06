import { connect } from 'react-redux';

import { createFrame } from '../../actions/frame_actions';
import { openModal } from '../../actions/modal_actions';
import UploadForm from './upload_form';

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    createFrame: (frame) => dispatch(createFrame(frame)),
  };
};


const mapStateToProps = (state) => {
  return {
   currentUser: state.entities.users[state.session.id],
   currentFile: state.entities.currentFile,
   errors: state.errors.frames,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(UploadForm);
