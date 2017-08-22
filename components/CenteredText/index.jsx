'use strict';
import React, { Component } from 'react';

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
    var inViewport = require('in-viewport');
    var inViewport2 = require('in-viewport');
    var elem = this.centeredText;
    let ctaAnimation = this.ctaAnimation;
    var watcher = inViewport(elem, visible);
    var buttonWatcher = inViewport2(ctaAnimation, colorUp);

    function visible() {
      elem.style.animation = 'fadeUp 1s ease forwards';
      elem.style.webkitAnimation = 'fadeUp 1s ease forwards';

      watcher.dispose();
    }

    function colorUp() {
      ctaAnimation.style.boxShadow = 'inset 0 -100px 0 0 #31302B';
      buttonWatcher.dispose();
    }

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

    return (
      <div className = 'centered-text fadeUp' style = { background }
        ref = {(centeredText) => { this.centeredText = centeredText; }}
        >
        <div className = 'centered-text-container'>
          <div className = 'container'>
            <h5>{ this.props.value.subtitle }</h5>
            <h2>{ this.props.value.title }</h2>
            <div className = 'paragraph'>
              <p>{ this.props.value.paragraph }</p>
            </div>
            { this.props.value.image != null ? this.renderImage() : null }
            <div className = { 'cta-container' + cta }>
              <div className = { this.props.value.cta.breed + cta }
                ref = {(ctaAnimation => { this.ctaAnimation = ctaAnimation;})}>
                <span className = 'cta-text'>{ this.props.value.cta.text }</span>
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
