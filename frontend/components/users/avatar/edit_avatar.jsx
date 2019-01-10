import React from 'react';


import AvatarEditor from 'react-avatar-editor';
import Slider from '../../util/slider';

class EditAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.currentVersionRef = React.createRef()
    this.state = {
      imageUrl: '',
      scale: '1.2',
      rotation: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleStep = this.handleStep.bind(this);
  }

  handleStep(e) {
    this.setState({
      scale: e.target.value,
    })
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
    e.preventDefault();
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
      <div className='avatar editor'>
        <div className='changables'>
          <div className='image-column'>
            <AvatarEditor
            ref={this.currentVersionRef}
            image={`${this.state.imageUrl}`}
            width={204}
            height={204}
            borderRadius={150}
            border={50}
            color={[255, 255, 255, 0.6]}
            scale={this.state.scale}
            rotate={0}
            onLoadSuccess={ () => { debugger} }
            onLoadFailure={ () => { debugger} }
             />
            <p className='instructions'>
              Click and drag.
            </p>
          </div>
          <div className='tweakers'>
            <input
                  className='sliders' 
                  type="range"
                  name="avatar"
                  min={1.0}
                  max={2.0}
                  step={.01}
                  value={this.state.scale}
                  onChange={this.handleStep}
                  width="100px"
                  backgroundColor="#232323"
            />
            <label htmlFor="avatar">Zoom</label>
            </div>
          </div>
        <div className='final-options'>        
          <p className='upload-submit' onClick={this.handleSave}>Save</p>
          <p className='ownership-button-delete' onClick={this.handleCancel}>Cancel</p>
        </div>
      </div>
    );
  }
}
 
export default EditAvatar;
