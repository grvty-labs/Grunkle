'use strict';
import React, { Component } from 'react';

class Post extends Component {
  render() {
    console.log(this.props);
    return (
      <div className = 'blog'>
        <div className = 'blog-header'>
          <div className = 'content'>
            <h3>BY: </h3>
            <h2>{ this.props.title }</h2>
          </div>
        </div>
        <div className = 'post-content'
          dangerouslySetInnerHTML={{ __html: this.props.body }}>
        </div>
      </div>
    );
  }
}

export default Post;
