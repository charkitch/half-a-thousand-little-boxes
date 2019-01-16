import { connect } from 'react-redux';

import { createAvatar } from '../../../actions/avatar_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

import EditAvatar from './edit_avatar'

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    createAvatar: (avatar) => dispatch(createAvatar(avatar)),
    closeModal: () => dispatch(closeModal()),
  };
};


const mapStateToProps = (state) => {
  debugger;
  return {
   currentUserId: state.session.id,
   currentFile: state.entities.currentFile,
   errors: state.errors.frames,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(EditAvatar);