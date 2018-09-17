import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { sendPhoto } from '../../actions/frames_actions';
import { openModal } from '../../actions/modal_actions';
import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        Do I print?
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    sendPhoto: (frame) => dispatch(sendPhoto(frame)),
  };
};


const mapStateToProps = (state) => {
  return {
   currentUser: state.entities.users[state.session.id],
   currentFile: state.entities.currentFile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(UploadForm);
