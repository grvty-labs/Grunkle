'use strict';
import React, { Component } from 'react';

class Hero extends Component {
  render() {
    // console.log(this.props.value.decoration.background_image);
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

    let background = {
      backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
      backgroundImage: this.props.value.decoration.background_image,
    };

    return (
      <div className = 'hero' style = {background}>
        <div className = { 'container' + columns }>
          <h3>{ this.props.value.subtitle}</h3>
          <h1>{ this.props.value.title }</h1>
          <h4>{ this.props.value.paragraph }</h4>
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
          <picture>
            <source media = '(max-width:768px)' srcSet = { this.props.value.image.thumbs.xs }/>
            <source media = '(max-width:1024px)' srcSet = { this.props.value.image.thumbs.sm }/>
            <source media = '(min-width:1024px)' srcSet = { this.props.value.image.thumbs.md }/>
            <img src = { this.props.value.image.thumbs.original }/>
          </picture>
        </div>
      </div>
    );
  }
}

export default Hero;
