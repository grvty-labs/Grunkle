'use strict';
import React, { Component } from 'react';
import Post from './Post.js';

class Roll extends Component {
  render() {
    const{
      title,
      subtitle,
      posts,
      change,
      idNext,
      idBack,
      postChange,
    } = this.props;

    return (
      <div>
        <div className = 'header'>
          <h5 className = 'subtitle'> { subtitle } </h5>
          <div className = 'title-container'>
            <h2 className = 'title'> { title }</h2>
          </div>
        </div>
        <Post posts = { posts } postChange={ postChange }/>
        <div className = 'pagination'>
          <div className = 'pagination-container'>
            <p onClick = {() => change(idNext)}>More recent.</p>
            <p onClick = {() => change(idBack)}>Older.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Roll;
