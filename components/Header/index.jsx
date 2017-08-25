// @flow
import * as React from 'react';
import inViewport from 'in-viewport';

import CTAComponent from '../CTA';
import type { BlockComponentProps } from '../../flowTypes/pages';
import type { HeaderBlock } from '../../flowTypes/blocks';
import type { ThumbedImageField } from '../../flowTypes/fields';

type State = {
  slide: boolean,
};

class Header extends React.Component < void, BlockComponentProps, State > {
  constructor(props: BlockComponentProps) {
    super(props);
    (this: any)
    .visible = this.visible.bind(this);
    (this: any)
    .renderImage = this.renderImage.bind(this);
  }

  state = {
    slide: this.props.slide,
  };

  fadeUp: HTMLDivElement;
  watcher: ? any;

  visible() {
    if (this.fadeUp) {
      this.fadeUp.style.animation = 'fadeUp 1s ease forwards';
      this.fadeUp.style.webkitAnimation = 'fadeUp 1s ease forwards';
    }
    if (this.watcher) {
      this.watcher.dispose();
    }
  }

  renderImage(image?: ThumbedImageField) {
    if (image) {
      return (
        <picture>
          <source media='(max-width:768px)' srcSet={image.thumbs.xs} />
          <source media='(max-width:1024px)' srcSet={image.thumbs.sm} />
          <source media='(min-width:1024px)' srcSet={image.thumbs.md} />
          <img src={image.thumbs.original} alt={image.title} />
        </picture>
      );
    }
    return null;
  }

  render() {
    const value: HeaderBlock = this.props.value;
    this.watcher = inViewport(this.fadeUp, this.visible);

    /*checks if the menu is opened or closed and changes the class depending
    on the case */
    const menu = (this.state.slide !== this.props.slide && window.innerWidth >= 1024)
      ? 'header-menu-open'
      : 'header-menu-close';

    const background = (value.decoration.background_image != null)
      ? {
        backgroundColor: `rgba(${value.decoration.background_color})`,
        backgroundImage: `url(${value.decoration.background_image.thumbs.original})`,
      }
      : {
        backgroundColor: `rgba(${value.decoration.background_color})`,
      };

    return (
      <div
        className='header-container fadeUp'
        ref={(fadeUp) => { this.fadeUp = fadeUp; }}
      >
        <div className={`header ${menu}`} style={background}>
          <div className='container'>
            <h5>{ this.props.value.subtitle }</h5>
            <h1>{ this.props.value.title }</h1>
            <p>{ this.props.value.paragraph }</p>
            <CTAComponent {...this.props.value.cta} toPage={this.props.toPage} />

            <div className='image'>
              { this.props.value.image != null ? this.renderImage() : null }
            </div>
          </div>
          <div className='division-rectangle' />
        </div>
      </div>
    );
  }
}

export default Header;
