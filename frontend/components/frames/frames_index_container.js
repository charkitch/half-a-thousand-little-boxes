import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createFrame } from '../../actions/frames_actions';
import { openModal } from '../../actions/modal_actions';
import UploadForm from './upload_form';
import { withRouter } from 'rails-routes'

const mapDispatchToProps = dispatch => {
  return {
    
    openModal: (modal) => dispatch(openModal(modal)),
  };
};


const mapStateToProps = (state) => {
  return {
    frames: state.entitites.frames,
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(UploadForm));
