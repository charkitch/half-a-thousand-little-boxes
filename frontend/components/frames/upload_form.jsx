import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createFrame } from '../../actions/frames_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
      caption: 'Tell us more about your beautiful photo',
      title: this.props.currentFile.name
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('frame[title]', this.state.title);
    formData.append('frame[caption]', this.state.caption);
    formData.append('frame[picture]', this.props.currentFile);
    formData.append('frame[photographer_id]', this.props.currentUser.id);
    this.props.createFrame(formData).then( () => this.props.history.push('/manage/public'));
    this.props.closeModal();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }


  componentDidMount() {
    const reader = new FileReader();
    const file = this.props.currentFile;
    reader.onloadend = () => {
      this.setState({imageURL: reader.result, imageFile: file});
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    const { caption, title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <img src={this.state.imageURL} className="preview-image" alt={this.props.currentFile.name} />
        <label>Title
          <input type="text" value={title} onChange={this.update('title')}></input>
        </label>

        <label className="upload-box label-caption">Caption
          <input type="textarea" value={caption} onChange={this.update('caption')}/>
        </label>
        <input className="upload-submit form-submit" type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    createFrame: frame => dispatch(createFrame(frame)),
    closeModal: () => dispatch(closeModal()),
  };
};


const mapStateToProps = (state) => {
  return {
   currentUser: state.entities.users[state.session.id],
   currentFile: state.entities.currentFile
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(UploadForm));
