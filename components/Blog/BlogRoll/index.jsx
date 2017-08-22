'use strict';
import React, { Component } from 'react';

class BlogRoll extends Component {
  state = {
    slide: this.props.slide,
  };

  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    let inViewport = require('in-viewport');
    let inViewport2 = require('in-viewport');
    let fadeUp = this.fadeUp;
    let watcher = inViewport(fadeUp, visible);
    let header = this.header;
    let watcher2 = inViewport2(header, animation);

    function visible() {
      fadeUp.style.animation = 'fadeUp 1s ease forwards';
      fadeUp.style.webkitAnimation = 'fadeUp 1s ease forwards';
      watcher.dispose();
    }

    function animation() {
      header.style.animation = 'fadeUp 1s ease forwards';
      header.style.webkitAnimation = 'fadeUp 1s ease forwards';
    }

    const miniPost = this.props.posts.map((element, index) => (
      <div
        className='mini-post fadeUp' key={index}
        ref={fadeUp => { this.fadeUp = fadeUp; }}
        onClick={() => this.props.toPage(element.id, element.url)}
      >
        <h5>BY { element.author.first_name }</h5>
        <h2>{ element.title }</h2>
        { element.tags.map((element, index) => (
          <span key={index}>#{element}</span>
        ))}
      </div>
    ));

    /*checks if the menu is opened or closed and changes the class depending
    on the case */
    let menu;
    if (this.state.slide !== this.props.slide && window.innerWidth >= 1024) {
      menu = 'menu-open';
    } else {
      menu = 'menu-close';
    }

    return (
      <div className='blog-roll'>
        <div
          className='header-container fadeUp'
          ref={h => this.header = h}
        >
          <div className='header'>
            <div className='container'>
              <h5>{this.props.subtitle}</h5>
              <h2>{this.props.title}</h2>
              <div
                className='description'
                dangerouslySetInnerHTML={{ __html: this.props.description }}
              >
              </div>
            </div>
            <div className='division-rectangle' />
          </div>
        </div>
        <div className='roll'>
          <div className='container'>
            {miniPost}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogRoll;
