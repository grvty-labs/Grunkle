'use strict';
import React, { Component } from 'react';

class Quote extends Component{
  render() {
    return (
      <div className = 'quote'>
        <div className = 'container'>
          <div className = 'image-container'>
            <picture>
              <source media = '(max-width:1440px)' srcSet =
                { this.props.value.photograph.thumbs.md }/>
              <img src = { this.props.value.photograph.thumbs.original }/>
            </picture>
            <img src = '/static/assets/quote-mark.svg' className = 'quote-mark'/>
          </div>
          <div className = 'text'>
            <div className = 'text-container'>
              <h6>{ this.props.value.quote }</h6>
              <div className = 'quoter-container'>
                <h3>{ this.props.value.name }</h3>
                <p>{ this.props.value.position } at { this.props.value.company }</p>
              </div>
              <div className = 'division-rectangle'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
