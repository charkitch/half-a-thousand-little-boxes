import React from 'react';


import AvatarEditor from 'react-avatar-editor';

class EditAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.currentVersionRef = React.createRef()
    this.state = {
      imageUrl: '',
      scale: 1.2,
      rotation: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.rotateRight = this.rotateRight.bind(this);
    this.rotateLeft = this.rotateLeft.bind(this);
  }

  handleStep(e) {
    this.setState({
      scale: e.target.value
    })
  }

  handleSubmit(blob) {
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

  rotateRight() {
    let rotate = this.state.rotation;
    let total = rotate + 90;
    this.setState({rotation: total % 360});
  }

  rotateLeft() {
    let rotate = this.state.rotation;
    let total = rotate - 90;
    if (total < 0) {
      this.setState({
        rotation: 360 + total,
      });
    } else {
       this.setState({
         rotation: total,
       })
    }
  }

  handleSave(e) {
    const url = this.currentVersionRef.current.getImage().toDataURL();
    fetch(url)
      .then( (result) => { 
        return result.blob();
        })
      .then( (blob) => {
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
      <div className='edit-box'>
        <div className='changables'>
          <div className='image-column'>
            <AvatarEditor
              className="editor"
              ref={this.currentVersionRef}
              image={`${this.state.imageUrl}`}
              width={204}
              height={204}
              borderRadius={150}
              border={50}
              color={[255, 255, 255, 0.6]}
              scale={this.state.scale}
              rotate={this.state.rotation}
             />
          </div>
          <div className='tweakers'>
            <p className='instructions'>
              Click and drag to center the image. 
            </p>
            <div className='scaler'>
                <input
                    className='sliders' 
                    type="range"
                    name="avatar"
                    min="1.0"
                    max="2.5"
                    step=".01"
                    onChange={this.handleStep}
                    width="100px"
                />
                <label htmlFor="avatar">Zoom</label>
              </div>
            <div className='rotators'>
              <button onClick={this.rotateLeft}>{"\u27f2"}</button>
              <button onClick={this.rotateRight}>{"\u27f3"}</button>
            </div>
            <div className='final-options'>        
              <p className='avatar-save clickable' onClick={this.handleSave}>Save</p>
             </div>
          </div>
          </div>
      
      </div>
    );
  }
}
 
export default EditAvatar;
