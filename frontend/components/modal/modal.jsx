import React from "react";

import { connect } from 'react-redux';

import EditAvatar from '../users/avatar/edit_avatar_container'
import UploadSelectContainer from '../frames/upload/upload_select';
import UploadForm from '../frames/upload/upload_form';


import { closeModal } from "../../actions/modal_actions";
import { UPLOAD_FORM, UPLOAD_FILE_SELECT, EDIT_AVATAR } from '../../actions/modal_actions';


const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case UPLOAD_FILE_SELECT:
        component = <UploadSelectContainer />;
      break;
    case UPLOAD_FORM:
      component = <UploadForm />;
      break;
    case EDIT_AVATAR:
      component = <EditAvatar />;
      break
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={ e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return { modal: state.ui.modal };
};

const MapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};


export default connect(mapStateToProps, MapDispatchToProps)(Modal);
