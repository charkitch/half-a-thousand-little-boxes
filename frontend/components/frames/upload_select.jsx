import { connect } from 'react-redux';
import React from 'react';
import { UPLOAD_FORM } from '../../actions/modal_actions';
import { openModal } from '../../actions/modal_actions'

class UploadSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleFile = this.handleFile.bind(this)
  }


  handleFile(e) {
    debugger
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      dispatch(receiveCurrentFile(file));
    };
    if (file) {
      this.props.openModal(UPLOAD_FORM)
    }
  }


  //



  render() {
    return (
      <div>
        <input type="file" onChange={this.handleFile}/>
      </div>
    )
  }
}

// <div className='upload-selector'>
//   <div>
//     <input type="file" onChange={this.handleFile.bind(this)} />
//   </div>
// </div>

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

const mapStateToProps = (state) => {
  return {
   currentUser: state.entities.users[state.session.id],
   currentFile: state.entities.currentFile
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadSelect);
