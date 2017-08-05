'use strict';
import React, { Component } from 'react';

class SideEmbedded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: this.props.slide,
    };
  }

  render() {
    let side;
    if (this.props.value.side == 'left') {
      side = 'left';
    }else if (this.props.value.side == 'right') {
      side = 'right';
    }

    let cta = '-none';
    if (this.props.value.cta.text != '') {
      cta = '-show';
    }

    let background = {
      backgroundColor: 'rgba(' + this.props.value.decoration.background_color + ')',
    };

    /*checks if the menu is opened or closed and changes the class depending
    on the case */
    let menu;
    if (this.state.slide != this.props.slide && window.innerWidth >= 1024) {
      menu = 'menu-open';
    } else {
      menu = 'menu-close';
    }

    var videoid = this.props.value.embed.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);

    return (
      <div className = 'sideEmbed' style = { background }>
        <div className = {'container ' + side }>
          <div className = 'column video'>
            <embed src = { 'http://youtube.com/embed/' + videoid[1] }/>
          </div>
          <div className = 'column'>
            <div className = { 'container-text ' + menu }>
              <h5>{ this.props.value.subtitle }</h5>
              <h2>{ this.props.value.title }</h2>
              <p>{ this.props.value.paragraph }</p>
              <div className = { 'cta-container' + cta }>
                <div className = {this.props.value.cta.breed + cta}>
                  <span>{this.props.value.cta.text}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideEmbedded;
