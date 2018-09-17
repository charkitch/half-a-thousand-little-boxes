import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react';
import UploadFormContainer from './upload_form_container'

class UploadSelect extends React.Component {
  constructor(props) {
    super(props);
  }


  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = newFileReader();
    fileReader.onloadend = () => {
    }
    // this.props.openModal(UploadFormContainer);
  }

  render() {

    return (
      <div className='upload-selector'>
        <div>
          <input type="file" />
        </div>
      </div>
    );
  }
}

export default UploadSelect;

// const mapDispatchToProps = dispatch => {
//   return {
//     processForm: (user) => dispatch(login(user)),
//     otherForm: (
//       <button onClick={() => dispatch(openModal('signup'))}>
//         Signup
//       </button>
//     ),
//     closeModal: () => dispatch(closeModal())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UploadSelect);
