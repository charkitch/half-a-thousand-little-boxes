import { connect } from 'react-redux';

import FrameShowDetails from './frame_show_details';
import { getUserById, getFollowStatus } from '../../../reducers/root_reducer';
import { requestOneFrame } from './../../../actions/frame_actions';


const mapDispatchToProps = dispatch => {
  return {
    requestOneFrame: (id) => dispatch(requestOneFrame(id)),
  };
};


const mapStateToProps = (state, ownProps) => {
  let photographerId = ownProps.photographerId;
  return {
    followStatus: getFollowStatus(state, photographerId),
    shownFrame: ownProps.shownFrame,
    photographer: getUserById(state, photographerId),
    owned: ownProps.shownFrame.photographer_id === state.session.id
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FrameShowDetails);
