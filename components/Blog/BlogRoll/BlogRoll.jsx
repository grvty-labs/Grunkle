'use strict';
import React, { Component } from 'react';

class BlogRoll extends Component{
  render() {

    let miniPost = this.props.posts.map((element, index) => (
        <div className = 'mini-post' key = { index }
          onClick = { () => this.props.toPage(element.id)} >
          <h5>BY { element.author.first_name }</h5>
          <h2>{ element.title }</h2>
          { element.tags.map((element, index) => (
            <span>#{element}</span>
          ))}
        </div>
    ));

    return (
      <div className = 'blog-roll'>
        <div className = 'header'>
          <div className = 'container'>
            <h5>{ this.props.subtitle }</h5>
            <h2>{ this.props.title }</h2>
            <div className = 'description'
              dangerouslySetInnerHTML = {{ __html: this.props.description }}>
            </div>
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
