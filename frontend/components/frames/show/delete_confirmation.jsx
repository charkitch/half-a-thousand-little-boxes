import React from 'react';

class DeleteConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.deleteOneFrame(this.props.shownFrame);
  }

  render() {
    debugger
    return (
      <div className="delete-box interaction-box">
        <strong>
          Are you sure you wish to delete this photo? This is an irrevocable action.
        </strong>
        <p onClick={this.handleClick}>Click to confirm</p>
      </div>
    );
  }
}


export default DeleteConfirmation;
