import React from 'react';

class FrameEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
      caption: '',
      title: this.props.currentFile.name
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }


  componentDidMount() {
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

export default FrameEditForm;
