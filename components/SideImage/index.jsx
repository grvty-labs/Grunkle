'use strict';
import React, { Component } from 'react';

class sideImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: this.props.slide,
      load: false,
    };
  }

  render() {
    var inViewport = require('in-viewport');
    var inViewport2 = require('in-viewport');
    var elem = this.image;
    let fadeUp = this.fadeUp;
    let ctaAnimation = this.ctaAnimation;
    var watcher = inViewport(fadeUp, visible);
    var buttonWatcher = inViewport2(ctaAnimation, colorUp);
    let load = false;

    function visible() {
      fadeUp.style.animation = 'fadeUp 1s ease forwards';
      fadeUp.style.webkitAnimation = 'fadeUp 1s ease forwards';
      let img = elem.lastElementChild;
      var tempImg = new Image();
      tempImg.src = img.src;
      tempImg.onload = () => {
        elem.style.backgroundColor = 'transparent';
        elem.style.transition = 'all 1s ease';
        img.style.opacity = '1';
      };

      watcher.dispose();
    }

    function colorUp() {
      ctaAnimation.style.boxShadow = 'inset 0 -100px 0 0 #31302B';
      buttonWatcher.dispose();
    }

    let cta = '-none';
    if (this.props.value.cta.text != '') {
      cta = '-show';
    }

    let menu;
    if (this.state.slide != this.props.slide && window.innerWidth >= 1024) {
      menu = 'menu-open';
    } else {
      menu = 'menu-close';
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
      image = (
        <picture className = { 'image ' + menu } ref = {(image) => { this.image = image; }}
        >
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
      <div className =  { 'sideImage ' + inverse +
      (this.props.value.inline ? ' inline' : ' not-inline') }
        style = { background }
        ref={div => {this.div = div;}}
        >
        <div className = 'column column-image'>
          { image }
          <div className = 'division-rectangle'></div>
        </div>
        <div className = 'column column-text'>
          <div className = {'container-text fadeUp ' + menu}
            ref = {(fadeUp => { this.fadeUp = fadeUp; })}>
            <h5>{ this.props.value.subtitle }</h5>
            <h2>{ this.props.value.title }</h2>
            <p>{ this.props.value.paragraph }</p>
            <div className = {'cta-container' + cta}>
              <div className = {this.props.value.cta.breed + cta}
                ref = {(ctaAnimation => { this.ctaAnimation = ctaAnimation;})}>
                <span className = 'cta-text'>{this.props.value.cta.text}</span>
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
