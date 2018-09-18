import React from 'react';

class FrameEditForm extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.state = {
      imageURL: '',
      caption: '',
      title: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('frame[title]', this.state.title);
    formData.append('frame[caption]', this.state.caption);
    this.props.editFrame(formData).then( () => this.props.history.push('/manage/public'));
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }


  componentDidMount() {
    if (this.frame.length === 0) {
      this.props.requestOneFrame(this.props.match.params.id);
    }
  }

  render() {
    debugger
    const { caption, title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
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
