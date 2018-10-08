import { connect } from 'react-redux';
import FrameShowDetails from './frame_show_details';
import { requestOneFrame } from '../../actions/frame_actions';
import { requestOne } from '../../actions/frame_actions';
import { getUserById } from '../../reducers/root_reducer';


const mapDispatchToProps = dispatch => {
  return {
    requestOneFrame: (id) => dispatch(requestOneFrame(id)),
  };
};


const mapStateToProps = (state, ownProps) => {
  let photographerId = ownProps.photographerId;
  return {
    photographer: getUserById(state, photographerId),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FrameShowDetails);
