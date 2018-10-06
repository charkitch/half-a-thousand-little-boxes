import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router';

import { createFrame } from '../../actions/frame_actions';
import FrameShow from './frame_show';
import {
  getOneFrameById,
  getPhotographerByFrameId
} from '../../reducers/root_reducer';
import { requestOneFrame } from './../../actions/frame_actions';

const mapDispatchToProps = dispatch => {
  return {
    requestOneFrame: id => dispatch(requestOneFrame(id))
  };
};


const mapStateToProps = (state, ownProps) => {
  let shownId = parseInt(ownProps.match.params.id);
  return {
    shownId: shownId,
    shownFrame: getOneFrameById(state, shownId),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(FrameShow));
