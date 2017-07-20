'use strict';
import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

class MasonryComponent extends Component {
  render() {
    // console.log(this.props);
    let images = this.props.value.images.map((element, index) => (
      <div className = 'image-container' key = { index }>
        <picture className = 'image'>
          <source media = '(max-width:1024px)' srcSet = { element.image.thumbs.xs }/>
          <source media = '(min-width:1024px)' srcSet = { element.image.thumbs.sm }/>
          <img src = { element.image.thumbs.original }/>
        </picture>
        <div className = 'information'>
          <h6>{ element.title }</h6>
          <span>{ element.info }</span>
        </div>
      </div>
    ));

    return (
      <div className = 'masonry'>
        <div className = 'header'>
          <h3>{ this.props.value.subtitle }</h3>
          <h2>{ this.props.value.title }</h2>
          <p>{ this.props.value.description }</p>
        </div>
      <Masonry
        className = {'masonry-component'}
        elementType = {'div'}
        options = { this.masonry_options }
        disableImagesLoaded = { false }
        updateOnEachImageLoad = { false }
        >
          { images }
        </Masonry>
      </div>
    );
  }
}

export default MasonryComponent;
