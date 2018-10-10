import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteOneFrame } from '../../../actions/frame_actions';

class DeleteConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteOneFrame(this.props.frameToDelete)
      .then(this.props.history.push('/home'));
  }

  render() {
    return (
      <div className="delete-box interaction-box">
        <strong>
          Are you sure you wish to delete this photo?
          This is an irrevocable action.
        </strong>
        <p className="clickable" onClick={this.handleClick}>Click to confirm</p>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    deleteOneFrame: (frame) => dispatch(deleteOneFrame(frame)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(DeleteConfirmation));
