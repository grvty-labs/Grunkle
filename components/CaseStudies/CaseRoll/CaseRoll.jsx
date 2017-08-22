'use strict';
import React, { Component } from 'react';

class CaseRoll extends Component{
  constructor(props) {
    super(props);
    this.state = {
      slide: this.props.slide,
    };
  }

  render() {
    let menu;
    if (this.state.slide != this.props.slide && window.innerWidth >= 1024) {
      menu = 'menu-open';
    } else {
      menu = 'menu-close';
    }

    let miniPost = this.props.cases.map((element, index) => (
      <div className = 'mini-post' onClick = {() => this.props.toPage(element.id, element.slug) }
        key = { index }>
        <div className = 'column column-image'>
          <picture className = {'image ' + menu}>
            <source media = '(max-width:767px)' srcSet = { element.header_image_thumbs.thumbs.xs }/>
            <source media = '(max-width:1024px)' srcSet = { element.header_image_thumbs.thumbs.sm }/>
            <source media = '(min-width:1024px)' srcSet = { element.header_image_thumbs.thumbs.md }/>
            <img src = { element.header_image_thumbs.thumbs.original }/>
          </picture>
        </div>
        <div className = 'column column-text'>
          <h5>{ element.subtitle }</h5>
          <h2>{ element.title }</h2>
          <p>{ element.search_description }</p>
        </div>
      </div>
    ));


    return (
      <div className = ' case-roll'>
        <div className = 'header-container'>
          <div className = 'header'>
            <div className = 'container'>
              <h5>{ this.props.subtitle }</h5>
              <h2>{ this.props.title }</h2>
              <div className = 'description'
                dangerouslySetInnerHTML = {{ __html: this.props.description }}>
              </div>
            </div>
            <div className = 'division-rectangle'></div>
          </div>
        </div>
        <div className = 'roll'>
          { miniPost }
        </div>
      </div>
    );
  }
}

export default CaseRoll;
