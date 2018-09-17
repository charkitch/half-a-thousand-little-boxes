import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { sendPhoto } from '../../actions/frames_actions';
import { openModal } from '../../actions/modal_actions';
import UploadForm from './upload_form';

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    sendPhoto: (frame) => dispatch(sendPhoto(frame)),
  };
};


const mapStateToProps = (state) => {
  debugger
  return {
   currentUser: this.state.entities.users[state.session.id],
   currentFile: this.state.entities.currentFile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(UploadForm);
