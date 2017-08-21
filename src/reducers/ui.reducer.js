import { TOGGLE_HACKY_ASS_MODAL } from '../units/discountCheckbox/actions/discountCheckbox.action.js';
import { OPEN_GALLERY_MODAL } from '../units/gallery/actions/thumbnails.action.js';
import { CLOSE_GALLERY_MODAL } from '../units/galleryModal/actions/galleryModal.action.js';

const initialState = {
  modals: {
    showTooltipModal: false,
    showGalleryModal: false,
    galleryModalInitialIndex: 0,
    galleryModalImages: []
  }
};

const toggleTooltip = (uiState, action) => {
  return {
    ...uiState,
    modals: {
      showTooltipModal: !uiState.modals.showTooltipModal
    }
  }
};

const openGalleryModal = (uiState, action) => {
  return {
    ...uiState,
    modals: {
      showGalleryModal: true,
      galleryModalInitialIndex: action.index,
      galleryModalImages: action.images
    }
  }
};

const closeGalleryModal = (uiState, action) => {
  return {
    ...uiState,
    modals: {
      showGalleryModal: false,
      galleryModalInitialIndex: 0,
      galleryModalImages: []
    }
  }
};

const uiReducer = (uiState = initialState, action) => {
  switch (action.type) {
    case TOGGLE_HACKY_ASS_MODAL: return toggleTooltip(uiState, action);
    case OPEN_GALLERY_MODAL: return openGalleryModal(uiState, action);
    case CLOSE_GALLERY_MODAL: return closeGalleryModal(uiState, action);
    default: return uiState;
  }
};

export default uiReducer;
