import React from 'react';

import { connect } from 'react-redux';

import { updateOneFrame } from '../../../actions/frame_actions';

class UpdateBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.frameToUpdate.title.repeat(1),
      caption: props.frameToUpdate.caption.repeat(1),
    };

    this.handleCaptionChange = this.handleCaptionChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCaptionChange(e) {
    this.setState({ caption: e.target.value });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateOneFrame({
      title: this.state.title,
      caption: this.state.caption,
      id: this.props.frameToUpdate.id,
    });
  }

  render() {
    return (
    <div className="interaction-box">
      <form onSubmit={this.handleSubmit}
            className="update-form"
      >
        <label>Title: </label>
          <input id="update-input"
            className="info-collector"
            type="text" onChange={this.handleTitleChange}
            value={this.state.title}
          />
        <label>Caption: </label>
          <textarea className="info-collector"
            value={this.state.caption}
            onChange={this.handleCaptionChange}/>
          <input id="update-submit"
                 value="Update"
                 type="submit"
          />
      </form>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateOneFrame: (frame) => dispatch(updateOneFrame(frame)),
  };
};


export default connect(null, mapDispatchToProps)(UpdateBox);
