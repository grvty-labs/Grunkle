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
    let background = {
      backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
    };

    let cta = '-none';
    if (this.props.value.cta.text != '') {
      cta = '-show';
    }

    return (
      <div className = 'centered-text' style = { background }>
        <div className = 'container'>
          <h4>{ this.props.value.subtitle }</h4>
          <h2>{ this.props.value.title }</h2>
          <p>{ this.props.value.paragraph }</p>
          { this.props.value.image != null ? this.renderImage() : null }
          <div className = { 'cta-container' + cta }>
            <div className = { this.props.value.cta.breed + cta }>
              <span>{ this.props.value.cta.text }</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CenteredText;
