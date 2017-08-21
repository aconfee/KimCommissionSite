export const openGalleryModal = (index, images) => {
  return { type: OPEN_GALLERY_MODAL, index, images };
};

export const OPEN_GALLERY_MODAL = "toggleGalleryModal";
