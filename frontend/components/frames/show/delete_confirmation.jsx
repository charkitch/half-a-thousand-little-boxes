import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { cancelDeleting, deleteOneFrame } from '../../../actions/frame_actions';

class DeleteConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.deleteOneFrame(this.props.frameToDelete)
      .then(this.props.history.push('/home'));
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.cancelDeleting();
  }

  render() {
    return (
      <div className="delete-box interaction-box">
        <strong>
          Are you sure you wish to delete this photo?
          This cannot be undone.
        </strong>
        <p className="confirm clickable" onClick={this.handleClick}>Confirm</p>
        <p className="cancel clickable" onClick={this.handleCancel}>Cancel</p>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    cancelDeleting: () => dispatch(cancelDeleting()),
    deleteOneFrame: (frame) => dispatch(deleteOneFrame(frame)),
  };
};

export default withRouter(
  connect(null, mapDispatchToProps)(DeleteConfirmation));
