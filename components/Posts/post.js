'use strict';
import React, { Component } from 'react';
import Content from './content.js';

class Post extends Component {
  render() {
    const {
      title,
      author,
      time,
      image,
      image_video,
      h1_title,
      text1,
      text2,
      subject,
      quote,
      quote_author,
      quote_author_position,
      next_post_title,
      next_post_time,
      latest_post_title,
      latest_post_time,
    } = this.props.blog;

    const {
      change,
      idNext,
      idBack,
    } = this.props;

    return (
      <div className = 'blog'>
        <div className = 'header'>
          <div className = 'subject'>
            { subject }
          </div>
          <div className = 'title-container'>
            <h2 className = 'title'>{ title }</h2>
          </div>
          <div className = 'blog-information'>
            <h6><i>By</i> { author }</h6>
            <div className = 'time-container'>
              <img className = 'icon'src = '/assets/shape.svg'></img>
              <h6>{ time } read</h6>
            </div>
          </div>
        </div>
        <div className = 'video-container'>
          <img src = { image_video }></img>
        </div>
        <div className = 'content'>
          <div className = 'container'>
            <div className = 'left-column'>
              <h2>{ h1_title }</h2>
              <Content content = { text1 }/>
            </div>
            <div className = 'right-column'>
              <img className = 'social' src = '/assets/facebook.svg'/>
              <img className = 'social' src = '/assets/twitter.svg'/>
              <img className = 'social' src = '/assets/gmail.svg'/>
            </div>
          </div>

          <img className = 'image' src = { image }></img>
          <div className = 'quote'>
            <h4 className = 'quote-text'>{ quote }</h4>
            <div className = 'author-quote'>
              { quote_author } | { quote_author_position }
            </div>
          </div>
          <div className = 'container'>
            <Content content = { text2 }/>
          </div>
          <div className = 'pagination-blog'>
            <div className = 'left-column' onClick = { () => change(idNext) }>
              <h5 className = 'red-post'>previous post</h5>
              <h4>{ latest_post_title }</h4>
            </div>
            <div className ='right-column' onClick = { () => change(idBack) }>
              <h5 className = 'red-post'>following post</h5>
              <h4>{ next_post_title }</h4>
            </div>
          </div>
          <div className = 'time'>
            <div className = 'time-container'>
              <img className = 'icon' src = '/assets/shape (2).svg'/>
              <h6>{ latest_post_time } read</h6>
            </div>
            <div className = 'time-container'>
              <img className = 'icon' src = '/assets/shape (2).svg'/>
              <h6>{ next_post_time }</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;
