'use strict';
import React, { Component } from 'react';

class BlogRoll extends Component{
  constructor(props) {
    super(props);
    this.state = {
      slide: this.props.slide,
    };
  }

  render() {
    var inViewport = require('in-viewport');
    var inViewport2 = require('in-viewport');
    let fadeUp = this.fadeUp;
    var watcher = inViewport(fadeUp, visible);
    let header = this.header;
    var watcher2 = inViewport2(header, animation);

    function visible() {
      fadeUp.style.animation = 'fadeUp 1s ease forwards';
      fadeUp.style.webkitAnimation = 'fadeUp 1s ease forwards';
      watcher.dispose();
    }

    function animation() {
      header.style.animation = 'fadeUp 1s ease forwards';
      header.style.webkitAnimation = 'fadeUp 1s ease forwards';
    }

    let miniPost = this.props.posts.map((element, index) => (
        <div className = 'mini-post fadeUp' key = { index }
          ref = {(fadeUp => { this.fadeUp = fadeUp;})}
          onClick = { () => this.props.toPage(element.id)} >
          <h5>BY { element.author.first_name }</h5>
          <h2>{ element.title }</h2>
          { element.tags.map((element, index) => (
            <span key = { index }>#{element}</span>
          ))}
        </div>
    ));

    /*checks if the menu is opened or closed and changes the class depending
    on the case */
    let menu;
    if (this.state.slide != this.props.slide && window.innerWidth >= 1024) {
      menu = 'menu-open';
    } else {
      menu = 'menu-close';
    }

    return (
      <div className = 'blog-roll'>
        <div className = 'header-container fadeUp'
          ref = {(header => { this.header = header; })}>
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
          <div className = 'container'>
          { miniPost }
          </div>
        </div>
      </div>
    );
  }
}

export default BlogRoll;
