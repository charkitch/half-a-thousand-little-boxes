import { connect } from 'react-redux';
import React from 'react';

class UploadSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleFile = this.handleFile.bind(this)
  }


  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      openModal(UploadForm);
    };
  }

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
