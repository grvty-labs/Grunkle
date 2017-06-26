'use strict';
import React, { Component } from 'react';

class Header extends Component {
  renderImage() {
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
    // console.log(this.props);
    let cta = '-none';
    if (this.props.value.cta.text != '') {
      cta = '-show';
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
      <div className = 'header' style = { background }>
        <div className = 'content'>
          <h3>{ this.props.value.subtitle }</h3>
          <h2>{ this.props.value.title }</h2>
          <span>{ this.props.value.paragraph }</span>
          <div className = { 'cta-container' + cta }>
            <a href = { this.props.value.cta.link }>
              <div className = {this.props.value.cta.breed + cta}>
                <span>{this.props.value.cta.text}</span>
              </div>
            </a>
          </div>
          <div className = 'image'>
            { this.props.value.image != null ? this.renderImage() : null }
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
