import { connect } from 'react-redux';

import { createAvatar } from '../../../actions/avatar_actions';
import { openModal } from '../../../actions/modal_actions';

import EditAvatar from './edit_avatar'

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    createAvatar: (avatar) => dispatch(createAvatar(avatar)),
  };
};


const mapStateToProps = (state) => {
  debugger
  return {
   currentFile: state.entities.currentFile,
   errors: state.errors.frames,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(EditAvatar);