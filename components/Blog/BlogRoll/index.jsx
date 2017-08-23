// @flow
import * as React from 'react';
import type { BlogRoll } from '../../../flowTypes';

type State = {
  slide: boolean,
};

class BlogRollComponent extends React.Component<void, BlogRoll, State> {
  state = {
    slide: this.props.slide,
  };

  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    const { toPage, posts } = this.props;
    const inViewport = require('in-viewport');
    const inViewport2 = require('in-viewport');
    const fadeUp = this.fadeUp;
    const watcher = inViewport(fadeUp, visible);
    const header = this.header;
    const watcher2 = inViewport2(header, animation);

    function visible() {
      fadeUp.style.animation = 'fadeUp 1s ease forwards';
      fadeUp.style.webkitAnimation = 'fadeUp 1s ease forwards';
      watcher.dispose();
    }

    function animation() {
      header.style.animation = 'fadeUp 1s ease forwards';
      header.style.webkitAnimation = 'fadeUp 1s ease forwards';
    }

    const miniPost = posts.map(element => (
      <div
        className='mini-post fadeUp' key={element.id}
        ref={(fUp) => { this.fadeUp = fUp; }}
        onClick={() => toPage(element.id, element.url)}
        role='link' tabIndex={0}
      >
        <h5>BY {element.author.first_name}</h5>
        <h2>{element.title}</h2>
        { element.tags.map((tag, i) => (
          <span key={i}>#{tag}</span>
        ))}
      </div>
    ));

    /* checks if the menu is opened or closed and changes the class depending
    on the case */
    // const menu = (this.state.slide !== this.props.slide && window.innerWidth >= 1024)
    //   ? 'menu-open'
    //   : 'menu-close';

    return (
      <div className='blog-roll'>
        <div
          className='header-container fadeUp'
          ref={(h) => { this.header = h; }}
        >
          <div className='header'>
            <div className='container'>
              <h5>{this.props.subtitle}</h5>
              <h2>{this.props.title}</h2>
              <div
                className='description'
                dangerouslySetInnerHTML={{ __html: this.props.description }}
              />
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

export default BlogRollComponent;
