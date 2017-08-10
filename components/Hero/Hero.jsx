'use strict';
import React, { Component } from 'react';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: this.props.slide,
    };
  }



  renderImage() {
    return (
      <picture className = 'image'>
        <source media = '(max-width:768px)' srcSet = { this.props.value.image.thumbs.xs }/>
        <source media = '(max-width:1024px)' srcSet = { this.props.value.image.thumbs.sm }/>
        <source media = '(min-width:1024px)' srcSet = { this.props.value.image.thumbs.md }/>
        <img src = { this.props.value.image.thumbs.original }/>
      </picture>
    );
  }

  render() {
    var inViewport = require('in-viewport');
    var elem = this.hero;
    var watcher = inViewport(elem, visible);

    function visible() {
      elem.style.animationPlayState = 'running';
      watcher.destroy();
    }

    let cta = '-none';
    if (this.props.value.cta.text != '') {
      cta = '-show';
    }

    let extraCta = '-none';
    if (this.props.value.extra_cta.text != '') {
      extraCta = '-show';
    }

    let columns = '-one-column';
    if ((this.props.value.form != 'none') || (this.props.value.image != null))  {
      columns = '-two-column';
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

    /*checks if the menu is opened or closed and changes the class depending
    on the case */
    let menu;
    if (this.state.slide != this.props.slide && window.innerWidth >= 1024) {
      menu = 'menu-open';
    } else {
      menu = 'menu-close';
    }

    return (
      <div className = 'hero fadeUp' style = {background} ref = {(hero => { this.hero = hero; })}>
        <div className = {'hero-container ' + menu }>
          <div className = { 'container' + columns }>
            <h5>{ this.props.value.subtitle}</h5>
            <h1 className = 'jumbo'>{ this.props.value.title }</h1>
            <div className = 'paragraph'>
              <p>{ this.props.value.paragraph }</p>
            </div>
            <div className = {'cta-container' + cta }>
              <a href = { this.props.value.cta.link }>
                <div className = {this.props.value.cta.breed + cta}>
                  <span>{ this.props.value.cta.text }</span>
                </div>
              </a>
              <a href = { this.props.value.extra_cta.link }>
                <div className = {this.props.value.extra_cta.breed + extraCta}>
                  <span>{ this.props.value.extra_cta.text }</span>
                </div>
              </a>
            </div>
          </div>
          <div className = { 'container' + columns }>
            { this.props.value.image != null ? this.renderImage() : null }
          </div>
          <div className = { 'division-rectangle ' + 'rectangle-' + menu }></div>
        </div>
      </div>
    );
  }
}

export default Hero;
