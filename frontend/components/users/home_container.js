import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Home from './home'

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
