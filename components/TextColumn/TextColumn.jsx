'use strict';
import React, { Component } from 'react';

class TextColumn extends Component {
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

    let background = {
      backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
    };
    let columnNumber = this.props.value.columns.length;
    let width;
    let column = this.props.value.columns.map((element, index) => (
      <div key = { index } className = 'column'>
        <img className = { 'icon' + (element.image == null ? ' null' : '')}
          src = { element.image == null ? null : element.image.thumbs.xs }/>
        <h3>{ element.title }</h3>
        <p>{ element.paragraph }</p>
      </div>
    ));
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
      <div className = 'text-column fadeUp' style = { background }
        ref = {(fadeUp => { this.fadeUp = fadeUp; })}>
        <div className = { 'container ' + menu } style = { width }>
          { column }
        </div>
      </div>

    );
  }
}

export default TextColumn;
