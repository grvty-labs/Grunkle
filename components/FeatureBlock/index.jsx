'use strict';
import React, { Component } from 'react';

class Feature extends Component{
  constructor(props) {
    super(props);
    this.state = {
      slide: this.props.slide,
    };
  }

  render() {
    var inViewport = require('in-viewport');
    var elem = this.fadeUp;
    var watcher = inViewport(elem, visible);

    function visible() {
      elem.style.animation = 'fadeUp 1s ease forwards';
      elem.style.webkitAnimation = 'fadeUp 1s ease forwards';

      watcher.dispose();
    }

    let columns = this.props.value.features.map((element, index) => (
        <div className = 'column' key = { index }>
          <img src = { element.svg }/>
          <h3>{ element.title }</h3>
          <p>{ element.paragraph }</p>
        </div>
    ));
    let columnNumber = this.props.value.features.length;
    let width;
    if (columnNumber >= 4 && window.innerWidth > 1024) {
      width = {
        width: '1024px',
      };
    } else if (columnNumber == 3 && window.innerWidth > 1024) {
      width = {
        width: '800px',
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
      <div className = 'feature fadeUp' ref = {(fadeUp => { this.fadeUp = fadeUp; })}>
        <div className = 'feature-container'>
          <div className = {'container ' + menu } style = { width }>
            { columns }
          </div>
        </div>
      </div>
    );
  }
}

export default Feature;
