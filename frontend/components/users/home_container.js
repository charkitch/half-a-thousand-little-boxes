import { connect } from 'react-redux';

import Home from './home';
import { openModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
  };
};


const mapStateToProps = (state) => {
  return {
   currentUser: state.entities.users[state.session.id],
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home);
