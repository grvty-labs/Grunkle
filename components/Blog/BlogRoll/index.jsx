// @flow
import * as React from 'react';
import inViewport from 'in-viewport';
import type { BlogRoll } from '../../../flowTypes/pages';

type State = {
  slide: boolean,
};

class BlogRollComponent extends React.Component<void, BlogRoll, State> {
  constructor(props: BlogRoll) {
    super(props);
    (this: any).animation = this.animation.bind(this);
    (this: any).visible = this.visible.bind(this);
  }

  state = {
    slide: this.props.slide,
  };

  componentDidMount() {
    document.title = this.props.title;
  }

  fadeUp: HTMLDivElement;
  header: HTMLDivElement;
  watcher: ?any;
  watcher2: ?any;

  visible() {
    if (this.fadeUp) {
      this.fadeUp.style.animation = 'fadeUp 1s ease forwards';
      this.fadeUp.style.webkitAnimation = 'fadeUp 1s ease forwards';
    }
    if (this.watcher) {
      this.watcher.dispose();
    }
  }

  animation() {
    if (this.header) {
      this.header.style.animation = 'fadeUp 1s ease forwards';
      this.header.style.webkitAnimation = 'fadeUp 1s ease forwards';
    }
    if (this.watcher2) {
      this.watcher2.dispose();
    }
  }

  render() {
    const { toPage, posts } = this.props;
    this.watcher = inViewport(this.fadeUp, this.visible);
    this.watcher2 = inViewport(this.header, this.animation);

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
