import { connect } from 'react-redux';
import ItemizedEstimate from '../components/itemizedEstimate.component.js';

const mapStateToProps = (state, ownProps) => {
  return { estimate: state.estimate };
};

const ItemizedCommissionEstimate = connect(
  mapStateToProps,
  null
)(ItemizedEstimate);

export default ItemizedCommissionEstimate;
