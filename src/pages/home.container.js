import { connect } from 'react-redux';
import Home from './home.component.js';

const mapStateToProps = (state, ownProps) => {
  return {
    customCommission: state.customCommission.customCommission
  };
};

const HomeContainer = connect(
  mapStateToProps
)(Home);

export default HomeContainer;
