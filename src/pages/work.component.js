import React, { Component } from 'react';
import WORK_GALLERY_IMAGES from '../constants/workGalleryUrls.js';
import ThumbnailContainer from '../units/gallery/containers/thumbnails.container.js';
import GalleryModalContainer from '../units/galleryModal/containers/galleryModal.container.js';

class Work extends Component {
  constructor(props) {
    super(props);
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div>
        <ThumbnailContainer images={ WORK_GALLERY_IMAGES } />
        <GalleryModalContainer />
      </div>
    );
  }
}

export default Work;
