import React , { Component } from 'react';
import PropTypes from 'prop-types';
import './thumbnails.component.css';
import Thumbnail from './thumbnail.component.js';

class Thumbnails extends Component {

  constructor(props) {
    super(props);

    this.totalHeight = 0;
    this.imageHeights = {};

    this.state = {
      isLoading: true,
      columnCount: 3
    };

    this.loadImages();
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.setColumnCount);
    this.setColumnCount();
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.setColumnCount);
  };

  // Get the total height of images in order to allocate columns.
  loadImages = () => {
    var that = this;

    this.props.images.forEach( (url) => {

      let image = new Image();
      image.src = url;

      image.onload = function() {
        that.totalHeight += this.height;
        that.imageHeights[url] = this.height;

        if(Object.keys(that.imageHeights).length === that.props.images.length) {
          that.setState({ isLoading: false });
        }
      };

    });
  };

  setColumnCount = () => {
    let columnCount = 1;

    if(window.innerWidth > 800) {
      columnCount = 2;
    }

    if(window.innerWidth > 1200) {
      columnCount = 3;
    }

    if(columnCount === this.state.columnCount) return;

    this.setState({ columnCount });
  };

  handleClick = url => {
    const index = this.props.images.indexOf(url);
    if(this.props.onClick) {
      this.props.onClick(index, this.props.images);
    }
  }

  renderImages = (images) => {
    return images.map( (url, key) => {
      return (
        <span key={ key }>
          { Thumbnail({ url, onClick: this.handleClick }) }
        </span>
      );
    })
  };

  renderColumn = (images, key) => {
    return (
      <div key={ key } className="thumbs-col">
        { this.renderImages(images) }
      </div>
    );
  }

  renderColumns = (columnCount) => {
    if(columnCount === 0) {
      console.error("Column count is 0.");
      return null;
    }

    if(this.state.isLoading) return null;

    const columnHeight = this.totalHeight / columnCount;
    const { images } = this.props;
    let columns = [];

    let imageIndex = 0;
    for(let columnIndex = 0; columnIndex < columnCount - 1; columnIndex++) {

      let currentHeight = 0;
      columns.push([]);

      while(imageIndex < images.length){

        let imageUrl = images[imageIndex]
        if(currentHeight + this.imageHeights[imageUrl] > columnHeight) {
          break;
        }

        columns[columnIndex].push(imageUrl);

        currentHeight += this.imageHeights[imageUrl];
        imageIndex++;
      }
    }

    // Fill last column with remaining.
    columns.push([]);
    while(imageIndex < images.length){
      columns[columnCount - 1].push(images[imageIndex]);
      imageIndex++;
    }

    return columns.map( (images, key) => {
      return this.renderColumn(images, key);
    });
  };

  renderLoader = () => {
    if(this.state.isLoading) {
      return (<div className="loader"></div>);
    }

    return null;
  }

  render() {
    return (
      <div className="thumbs-row">
        { this.renderLoader() }
        { this.renderColumns(this.state.columnCount) }
      </div>
    );
  };
};

Thumbnails.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Thumbnails;
