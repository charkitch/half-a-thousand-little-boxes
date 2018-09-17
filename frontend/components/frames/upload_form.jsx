import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { sendPhoto } from '../../actions/frames_actions';
import { openModal } from '../../actions/modal_actions';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
      description: '"Tell us more about your beautiful photo"',
      title: this.props.currentFile.name
    };
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(e) {
    console.log('hat')
    debugger
    e.preventDefault();
    const frameData = new FormData();
    frameData.append('frame[title]', this.state.title);
    frameData.append('frame[description]', this.state.description);
    frameData.append('frame[image]', this.currentFile);
    frameData.appened('frame[photographer_id]', this.props.session.id);
    debugger
    this.props.createFrame(frameData);
    closeModal()
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  }


  componentDidMount() {
    const reader = new FileReader();
    const file = this.props.currentFile;
    console.log(reader.readyState);
    reader.onloadend = () => {
      this.setState({imageURL: reader.result, imageFile: file});
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    console.log(reader.readyState);
  }

  render() {
    const { description, title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <img src={this.state.imageURL} className="preview-image" alt={this.props.currentFile.name} />
        <label>Title
          <input type="text" value={title} onChange={this.update('title')}></input>
        </label>

        <label className="upload-box label-description"> Description
          <input type="textarea" value={description} onChange={this.update('description')}/>
        </label>
        <input className="upload-submit form-submit" type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    sendPhoto: frame => dispatch(sendPhoto(frame)),
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
