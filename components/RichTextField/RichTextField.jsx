'use strict';
import React, { Component } from 'react';

class RichTextField extends Component{
  constructor(props) {
    super(props);
    this.state = {
      slide: this.props.slide,
    };
  }

  render() {

    /*checks if the menu is opened or closed and changes the class depending
    on the case */
    let menu;
    if (this.state.slide != this.props.slide && window.innerWidth >= 1024) {
      menu = 'menu-open';
    } else {
      menu = 'menu-close';
    }

    return (
      <div className = 'rich-text-field'>
          <div className = { 'container ' + menu }>
            <div className = 'text'
              dangerouslySetInnerHTML={{ __html: this.props.value }}>
            </div>
          </div>
      </div>
    );
  }
}

export default RichTextField;
