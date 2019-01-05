import React from 'react';

import ImageEditor from '../../util/image_editor';

class EditAvatar extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      imageUrl: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
     const formData = new FormData();
    formData.append('avatar[shown_user_id]', this.props.shownUser.id)
    formData.append('avatar[picture]', e.currentTarget.files[0]);
    this.props.createAvatar(formData)
    .then(this.setState({hoverStatus: false}));
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
      debugger
      this.setState({imageUrl: reader.result, imageFile: file});
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  imageBox() {
    if (!this.state.imageUrl) {
      return null;
    }
    return (
      <img
        src={this.state.imageUrl}
        className="preview-image"
        alt={this.props.currentFile.name}
      />
    );
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={'err-${i}'}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    debugger
    return (
      <>
        <ImageEditor imageUrl={`${this.state.imageUrl}`}  />
      </>
    );
  }
}
 
export default EditAvatar;
