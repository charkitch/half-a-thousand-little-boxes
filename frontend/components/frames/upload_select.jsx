import { connect } from 'react-redux';
import React from 'react';

import { UPLOAD_FORM } from '../../actions/modal_actions';
import { openModal } from '../../actions/modal_actions';
import { receiveCurrentFile } from '../../actions/frame_actions';

class UploadSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleFile = this.handleFile.bind(this);
  }


  handleFile(e) {
    const file = e.currentTarget.files[0];
    this.props.receiveCurrentFile(file);
    this.props.openModal(UPLOAD_FORM);
  }


  render() {
    return (
      <div>
        <div className="upload-mask clickable">
          <div className="upload-text">Select a Photo</div>
        </div>
        <input className="upload-input" type="file" onChange={this.handleFile}/>
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    receiveCurrentFile: file => dispatch(receiveCurrentFile(file))
  };
};

const mapStateToProps = (state) => {
  return {
   currentUser: state.entities.users[state.session.id],
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadSelect);
