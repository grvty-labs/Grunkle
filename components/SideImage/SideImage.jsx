'use strict';
import React, { Component } from 'react';

class sideImage extends Component {

  render() {
    console.log(this.props);
    let background;
    if (this.props.value.side == 'right') {
      background = {
          backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
          flexDirection: 'row-reverse',
        };
    } else {
      background = {
          backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
        };
    }

    let cta = '-none';
    if (this.props.value.cta.text != '') {
      cta = '-show';
    }

    let inline;
    if (this.props.value.inline != 'true') {
      inline = {
        alignItems: 'center',
      };
    }

    return (
      <div className =  'sideImage' style = {{ ...background, ...inline }}>
        <div className = 'column' style = { inline }>
          <div className = 'container'>
            <picture>
              <source media = '(max-width:768px)' srcSet = { this.props.value.image.thumbs.xs }/>
              <source media = '(max-width:1024px)' srcSet = { this.props.value.image.thumbs.sm }/>
              <source media = '(min-width:1024px)' srcSet = { this.props.value.image.thumbs.md }/>
              <img src = { this.props.value.image.thumbs.original }/>
            </picture>
          </div>
        </div>
        <div className = 'column'>
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
