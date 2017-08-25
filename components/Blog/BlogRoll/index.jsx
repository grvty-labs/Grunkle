// @flow
import * as React from 'react';
import inViewport from 'in-viewport';

import PostPreview from './postPreview';
import type { BlogRoll } from '../../../flowTypes/pages';

type State = {
  slide: boolean,
  show: boolean,
};

class BlogRollComponent extends React.Component<void, BlogRoll, State> {
  constructor(props: BlogRoll) {
    super(props);
    (this: any).fadeUp = this.fadeUp.bind(this);
  }

  state = {
    slide: this.props.slide,
    show: false,
  };

  componentDidMount() {
    document.title = this.props.title;
    this.watcher = inViewport(this.div, this.fadeUp);
  }

  div: HTMLDivElement;
  watcher: ?any;

  fadeUp() {
    if (this.watcher) {
      this.watcher.dispose();
      this.setState({ show: true });
    }
  }

  render() {
    const { toPage, posts } = this.props;

    /* checks if the menu is opened or closed and changes the class depending
    on the case */
    // const menu = (this.state.slide !== this.props.slide && window.innerWidth >= 1024)
    //   ? 'menu-open'
    //   : 'menu-close';

    return (
      <div className='blog-roll'>
        <div
          className={`div-container fadeUp ${this.state.show ? 'play' : ''}`}
          ref={(h) => { this.div = h; }}
        >
          <div className='div'>
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
            {
              posts.map(element => (
                <PostPreview {...element} toPage={toPage} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default BlogRollComponent;
