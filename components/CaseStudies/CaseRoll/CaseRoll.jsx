'use strict';
import React, { Component } from 'react';

class CaseRoll extends Component{
  render() {
    let miniPost = this.props.cases.map((element, index) => (
      <div className = 'mini-post' onClick = {() => this.props.toPage(element.id) }
        key = { index }>
        <div className = 'left-column'>
          <picture className = 'image'>
            <source media = '(max-width:767px)' srcSet = { element.header_image_thumbs.thumbs.xs }/>
            <source media = '(max-width:1024px)' srcSet = { element.header_image_thumbs.thumbs.sm }/>
            <source media = '(min-width:1024px)' srcSet = { element.header_image_thumbs.thumbs.md }/>
            <img src = { element.header_image_thumbs.thumbs.original }/>
          </picture>
        </div>
        <div className = 'right-column'>
          <h5>{ element.subtitle }</h5>
          <h2>{ element.title }</h2>
          <p>{ element.search_description }</p>
        </div>
      </div>
    ));

    return (
      <div className = ' case-roll'>
        <div className = 'header'>
          <div className = 'content'>
            <h5>{ this.props.subtitle }</h5>
            <h2>{ this.props.title }</h2>
            <div className = 'description'
              dangerouslySetInnerHTML = {{ __html: this.props.description }}>
            </div>
          </div>
          <div className = 'rectangle'></div>
        </div>
        <div className = 'roll'>
          { miniPost }
        </div>
      </div>
    );
  }
}

export default CaseRoll;
