import { connect } from 'react-redux';

import FrameShowDetails from './frame_show_details';
import { getUserById } from '../../../reducers/root_reducer';
import { requestOneFrame } from './../../../actions/frame_actions';


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
