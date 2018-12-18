import React from 'react';
import { Link } from 'react-router-dom';

import DeleteConfirmation from './delete_confirmation';
import UpdateBox from './update_box';
import FakeAd from './fake_ad';
import FollowButton from '../../users/follow_button_container';
import MetadataBox from './metadata';



class FrameShowDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, deleting: false};
    this.confirmingDelete = false;
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  componentDidMount() {
    this.props.requestOneFrame(this.props.shownFrame.id);
  }

  ownershipBox() {
    return (
      <div className="ownership-box interaction-box">
        <div onClick={this.handleDeleteClick}
          className="ownership-button ownership-button-delete clickable">Delete
        </div>
        <div onClick={this.handleEditClick}
          className="ownership-button ownership-button-edit clickable">Edit
        </div>
      </div>
    );
  }


  handleDeleteClick() {
    this.props.beginDeleting();
  }

  handleEditClick(e) {
    this.props.beginEditing();
  }

  render() {
    let userBox;
    if (this.props.editing) {
      userBox = <UpdateBox frameToUpdate={this.props.shownFrame} />;
    } else if (this.props.deleting) {
      userBox = <DeleteConfirmation frameToDelete={this.props.shownFrame} />;
    } else if (this.props.owned) {
      userBox = this.ownershipBox();
    } else {
      userBox = (<div className="frame-user-details-box">
        <Link to={`/users/${this.props.shownFrame.photographer_id}`}
              className='author-link'
        >
          <div>
            <img className="user-avatar-frame-show"
              src={window.userIcon}
              alt="default user icon"/>
          </div>
          <div className="user-text-frame-show">
            <div className="username">{this.props.photographer.username}</div>
            <FollowButton
              className="follow-button-frame-show"
              shownUser={this.props.photographer}
              followStatus={this.props.followStatus}
            />
          </div>
        </Link>
      </div>);
    }
    return (
      <div className="frame-show-side-box">
        <div className='fake-ad'>
          <img src="https://cdn4.buysellads.net/uu/1/21673/1538328304-Slack-pink_logo.png"
            alt="fake slack ad"
          />
        <FakeAd />
        </div>
        <div className='info-body'>
          {userBox}
          <div className="photo-details">
            <div className="photo-text-boxes">
              <h2>{this.props.shownFrame.title}</h2>
              <p>{this.props.shownFrame.caption}</p>
            </div>
            <div>

            </div>
            <MetadataBox shownFrame={this.props.shownFrame} />
          </div>
        </div>
      </div>
      );
  }
}

export default FrameShowDetails;
