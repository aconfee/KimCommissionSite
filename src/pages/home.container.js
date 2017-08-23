import { connect } from 'react-redux';
import { getAvailability } from './home.action.js';
import Home from './home.component.js';

const mapStateToProps = (state, ownProps) => {
  return {
    availability: state.commissionApi.availability
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAvailability: () => {
      dispatch(getAvailability());
    }
  }
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeContainer;
