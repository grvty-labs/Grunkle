'use strict';
import React, { Component } from 'react';
import inView from 'in-view';

class CenteredText extends Component {
  renderImage(element) {
    return (
      <picture>
        <source media = '(max-width:768px)' srcSet = { this.props.value.image.thumbs.xs }/>
        <source media = '(max-width:1024px)' srcSet = { this.props.value.image.thumbs.sm }/>
        <source media = '(min-width:1024px)' srcSet = { this.props.value.image.thumbs.md }/>
        <img src = { this.props.value.image.thumbs.original }/>
      </picture>
    );
  }

  render() {
    let background;
    if (this.props.value.decoration.background_image != null) {
      background = {
        backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
        backgroundImage: 'url(' + this.props.value.decoration.background_image.thumbs.original + ')',
      };
    }else {
      background = {
        backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
      };
    }

    let cta = '-none';
    if (this.props.value.cta.text != '') {
      cta = '-show';
    }

    /*Check if the element is in view port and if it is
    then the animation is played*/
    inView('.centered-text')
    .on('enter', el => {
      elem.style.animationPlayState = 'running';
    });

    return (
      <div className = 'centered-text' style = { background }>
        <div className = 'centered-text-container'>
          <div className = 'container'>
            <h5>{ this.props.value.subtitle }</h5>
            <h2>{ this.props.value.title }</h2>
            <div className = 'paragraph'>
              <p>{ this.props.value.paragraph }</p>
            </div>
            { this.props.value.image != null ? this.renderImage() : null }
            <div className = { 'cta-container' + cta }>
              <div className = { this.props.value.cta.breed + cta }>
                <span>{ this.props.value.cta.text }</span>
              </div>
            </div>
          </div>
          <div className = 'division-rectangle'></div>
        </div>
      </div>
    );
  }
}

export default CenteredText;
