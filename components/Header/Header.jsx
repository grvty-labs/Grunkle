'use strict';
import React, { Component } from 'react';

class Header extends Component {
  render(){
    // console.log(this.props);
    let cta = '-none';
    if(this.props.value.cta.text != ''){
      cta = '-show';
    }
    let background = {
      backgroundColor: "rgba("+this.props.value.decoration.background_color+")",
      backgroundImage: this.props.value.decoration.background_image,
    }
    return (
      <div className = 'header' style = { background }>
        <div className = 'content'>
          <h2>{ this.props.value.title }</h2>
          <span>{ this.props.value.paragraph }</span>
          <div className = { 'cta-container' + cta }>
            <a href = { this.props.value.cta.link }>
              <div className = {this.props.value.cta.breed + cta}>
                <span>{this.props.value.cta.text}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
