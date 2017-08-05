'use strict';
import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: this.props.slide,
    };
  }

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

    /*checks if the menu is opened or closed and changes the class depending
    on the case */
    let menu;
    if (this.state.slide != this.props.slide && window.innerWidth >= 1024) {
      menu = 'header-menu-open';
    } else {
      menu = 'header-menu-close';
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
      <div className = 'header-container'>
        <div className = { 'header '  + menu } style = { background }>
          <div className =  'container'>
            <h5>{ this.props.value.subtitle }</h5>
            <h1>{ this.props.value.title }</h1>
            <p>{ this.props.value.paragraph }</p>
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
          {/* <div className = 'division-rectangle'></div> */}
          <div className = 'division-rectangle'></div>
        </div>
      </div>
    );
  }
}

export default Header;
