'use strict';
import React, { Component } from 'react';
import inView from 'in-view';

class Hero extends Component {
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
    // let body = document.getElementById('body');
    // inView('.hero')
    // .on('enter', el => {
    //   body.style.backgroundColor = 'rgba(' + this.props.value.decoration.background_color + ')';
    // });

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

    return (
      <div className = 'hero' style = {background}>
        <div className = 'hero-container'>
          <div className = { 'container' + columns }>
            <h5>{ this.props.value.subtitle}</h5>
            <h2>{ this.props.value.title }</h2>
            <div className = 'paragraph'>
              <h4>{ this.props.value.paragraph }</h4>
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
        </div>
        </div>
    );
  }
}

export default Hero;
