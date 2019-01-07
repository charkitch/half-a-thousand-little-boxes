import React from 'react';


import AvatarEditor from 'react-avatar-editor';

class EditAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.currentVersionRef = React.createRef()
    this.state = {
      imageUrl: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(blob) {
    debugger
    const formData = new FormData();
    formData.append('avatar[shown_user_id]', this.props.currentUserId)
    formData.append('avatar[picture]', blob);
    this.props.createAvatar(formData)
    .then(this.setState({hoverStatus: false}));
    this.props.closeModal();
  }

  handleCancel(e) {
    this.props.closeModal();
  }

  handleSave(e) {
    const url = this.currentVersionRef.current.getImage().toDataURL();
    fetch(url)
      .then( (result) => { 
        debugger
        return result.blob();
        })
      .then( (blob) => {
        debugger
        this.handleSubmit(blob)
        })
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
    return (
      <>
        <AvatarEditor
        ref={this.currentVersionRef}
        image={`${this.state.imageUrl}`}
        width={104}
        height={104}
        borderRadius={50}
        border={50}
        color={[255, 255, 255, 0.6]}
        scale={2.0}
        rotate={0}
        onLoadSuccess={ () => { debugger} }
        onLoadFailure={ () => { debugger} }
       />
        <p onClick={this.handleSave}>Save</p>
        <p onClick={this.handleCancel}>Cancel</p>
      </>
    );
  }
}
 
export default EditAvatar;
