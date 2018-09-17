import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { sendPhoto } from '../../actions/frames_actions';
import { openModal } from '../../actions/modal_actions';
import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    debugger
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault;
  }

  render() {
    debugger
    return (
      <div>Do I print?</div>
      // <form>
      //
      //   <div>
      //     Do I print?
      //   </div>
      //   <label>Title
      //     <input type="text" value={this.props.current.}></input>
      //   </label>
      //
      //
      //   <label className="upload-box label-description"> Description
      //     <input type="textarea" value="Tell us more about your beautiful photo"/>
      //   </label>
      // </form>
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
  debugger
  return {
   currentUser: state.entities.users[state.session.id],
   currentFile: state.entities.currentFile
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(UploadForm);
