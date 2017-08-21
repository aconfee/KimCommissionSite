import { connect } from 'react-redux';
import { closeGalleryModal } from '../actions/galleryModal.action.js';
import GalleryModal from '../components/galleryModal.component.js';

const mapStateToProps = (state, ownProps) => {
  return {
    images: state.ui.modals.galleryModalImages,
    index: state.ui.modals.galleryModalInitialIndex,
    show: state.ui.modals.showGalleryModal
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(closeGalleryModal());
    }
  }
};

const GalleryModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryModal);

export default GalleryModalContainer;
