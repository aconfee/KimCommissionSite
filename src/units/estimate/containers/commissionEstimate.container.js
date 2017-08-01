import { connect } from 'react-redux';
import './commissionEstimate.container.css';
import StickyResponsiveEstimate from '../components/stickyResponsiveEstimate.component.js';

const mapStateToProps = (state, ownProps) => {
  return {
    items: [
      {
        label: "Character",
        displayValue: "$" + state.estimate.character
      },
      {
        label: "Background",
        displayValue: "$" + state.estimate.background
      },
      {
        label: "# of Characters",
        displayValue: "x" + state.estimate.numberOfCharacters
      }
    ],
    total: state.estimate.total
  };
};

const CommissionEstimate = connect(
  mapStateToProps,
  null
)(StickyResponsiveEstimate);

export default CommissionEstimate;
