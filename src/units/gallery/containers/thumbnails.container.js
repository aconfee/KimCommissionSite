import { connect } from 'react-redux';
import { openGalleryModal } from '../actions/thumbnails.action.js';
import Thumbnails from '../components/thumbnails.component.js';

const mapStateToProps = (state, ownProps) => {
  return {
    images: ownProps.images
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (index, images) => {
      dispatch(openGalleryModal(index, images));
    }
  }
};

const ThumbnailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Thumbnails);

export default ThumbnailContainer;
