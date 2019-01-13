import React from 'react';


import AvatarEditor from 'react-avatar-editor';

class EditAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.currentVersionRef = React.createRef()
    this.state = {
      imageUrl: '',
      scale: 1.2,
      rotate: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleStep = this.handleStep.bind(this);
    this.handleRotate = this.handleRotate.bind(this);
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

  handleRotate(e) {
    e.preventDefault;
    if (e.currentTarget.innerText[7] == 'R') {
     let nextRot = this.rotateRight()
     this.setState({
        rotate: nextRot,
      });
    } else {
      let nextRot = this.rotateLeft()
      this.setState({
        rotate: nextRot,
      });
    }
  }

  rotateRight() {
    let rotate = this.state.rotate
    let total = rotate + 90;
    return total % 360;
  }

  rotateLeft() {
    let rotate = this.state.rotate
    let total = rotate - 90
    if (total < 0) {
      return 360 - total;
    } else {
      return total;
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
              rotate={this.state.rotate}
             />
            <p className='instructions'>
              click and drag
            </p>
          </div>
          <div className='tweakers'>
            <div className='scaler'>
                <input
                    className='sliders' 
                    type="range"
                    name="avatar"
                    min="1.0"
                    max="2.0"
                    step=".01"
                    onChange={this.handleStep}
                    width="100px"
                />
                <label htmlFor="avatar">Zoom</label>
              </div>
            <div className='rotators'>
              <button onClick={this.handleRotate}>{"\u27f2"}</button>
              <button onClick={this.handleRotate}>{"\u27f3"}</button>
            </div>
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
