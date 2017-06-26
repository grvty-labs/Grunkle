'use strict';
import React, { Component } from 'react';

class Post extends Component {
  render() {
    let posts = this.props.posts.map((element, index) => (
      <div className = 'mini-post' key = { index } onClick = { () =>
        this.props.postChange(element.id) }>
            <div className = 'left-column'>
              <img src = { element.image } />
            </div>
            <div className = 'right-column'>
              <h3 className = 'title'>{ element.title }</h3>
              <div className = 'divider'></div>
              <div className = 'bottom-mini-post'>
                <img className = 'icon' src = 'assets/shape.svg'/>
                <strong className = 'time'>{ element.time }</strong>
              </div>
            </div>
      </div>
    ));

    return (
      <div> { posts }</div>
    )
  }
}

export default Post;
