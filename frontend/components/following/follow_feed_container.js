import { connect } from 'react-redux';
import FollowFeed from './follow_feed';

const mapDispatchToProps = dispatch => {
  return {
    //unfollow:
  };
};


const mapStateToProps = (state) => {
  return {
    followees: state.entities.users[state.session.id].followees
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(FollowFeed);
