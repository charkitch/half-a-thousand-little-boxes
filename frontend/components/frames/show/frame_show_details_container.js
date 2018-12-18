import { connect } from 'react-redux';

import FrameShowDetails from './frame_show_details';
import { getUserById, getFollowStatus } from '../../../reducers/root_reducer';
import { 
  beginDeleting,
  beginEditing, 
  requestOneFrame 
} from './../../../actions/frame_actions';


const mapDispatchToProps = dispatch => {
  return {
    beginDeleting: () => dispatch(beginDeleting()),
    beginEditing: () => dispatch(beginEditing()),
    requestOneFrame: (id) => dispatch(requestOneFrame(id)),
  };
};


const mapStateToProps = (state, ownProps) => {
  let photographerId = ownProps.photographerId;
  return {
    editing: state.ui.flag.editing,
    deleting: state.ui.flag.deleting,
    followStatus: getFollowStatus(state, photographerId),
    shownFrame: ownProps.shownFrame,
    photographer: getUserById(state, photographerId),
    owned: ownProps.shownFrame.photographer_id === state.session.id
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FrameShowDetails);
