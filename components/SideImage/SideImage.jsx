'use strict';
import React, { Component } from 'react';

class sideImage extends Component {

  render() {
    let cta = '-none';
    if (this.props.value.cta.text != '') {
      cta = '-show';
    }

    let inverse = 'normal';
    if (this.props.value.side == 'right') {
      inverse = 'inverse';
    }

    let background = {
      backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
    };

    let image;
    if (this.props.value.inline) {
      console.log('entro');
      image = (
        <picture className = 'image'>
          <source media = '(max-width:768px)' srcSet = { this.props.value.image.thumbs.xs }/>
          <source media = '(max-width:1024px)' srcSet = { this.props.value.image.thumbs.sm }/>
          <source media = '(min-width:1024px)' srcSet = { this.props.value.image.thumbs.md }/>
          <img src = { this.props.value.image.thumbs.original }/>
        </picture>
      );
    } else {
      image = (
        <div className = 'image-container'
          style = {{ backgroundImage: 'url(' + this.props.value.image.thumbs.original + ')' }}/>
      );
    }

    return (
      <div className =  { 'sideImage ' + inverse }
        style = { background }>
        <div className = 'column'>
          <div className = 'container'>
            { image }
          </div>
        </div>
        <div className = {'column ' + (this.props.value.inline ? 'inline' : 'center')}>
          <div className = 'container-text'>
            <h3>{ this.props.value.subtitle }</h3>
            <h2>{ this.props.value.title }</h2>
            <p>{ this.props.value.paragraph }</p>
            <div className = {'cta-container' + cta}>
              <div className = {this.props.value.cta.breed + cta}>
                <span>{this.props.value.cta.text}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default sideImage;
