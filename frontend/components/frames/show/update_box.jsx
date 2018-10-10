import React from 'react';

class UpdateBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.frameToUpdate.title.repeat(1),
      caption: props.frameToUpdate.caption.repeat(1),
    };

    this.handleCaptionChange = this.handleCaptionChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleCaptionChange(e) {
    this.setState({ caption: e.target.value });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
    <div className="interaction-box">
      <form className="update-form">
        <label>Title </label>
          <input id="update-input" className="info-collector" type="text" onChange={this.handleTitleChange} value={this.state.title} />
        <label>Caption: </label>
          <textarea className="info-collector" value={this.state.caption} onChange={this.handleCaptionChange}/>
      </form>
    </div>
    );
  }
}

export default UpdateBox;
