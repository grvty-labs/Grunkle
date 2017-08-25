// @flow
import * as React from 'react';
import inViewport from 'in-viewport';

import CTAComponent from '../CTA';
import type { HeroBlock } from '../../flowTypes/blocks';
import type { ThumbedImageField } from '../../flowTypes/fields';
import type { BlockComponentProps } from '../../flowTypes/pages';

type State = {
  slide: boolean,
};

class Hero extends React.Component<void, BlockComponentProps, State> {
  constructor(props: BlockComponentProps) {
    super(props);
    (this: any).renderImage = this.renderImage.bind(this);
    (this: any).visible = this.visible.bind(this);
  }

  state = {
    slide: this.props.slide,
  };

  hero: HTMLDivElement;
  watcher: ?any;

  visible() {
    if (this.hero) {
      this.hero.style.animation = 'fadeUp 1s ease forwards';
      this.hero.style.webkitAnimation = 'fadeUp 1s ease forwards';
    }

    if (this.watcher) {
      this.watcher.dispose();
    }
  }

  renderImage(image?: ThumbedImageField) {
    if (image) {
      return (
        <picture className='image'>
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
    const value: HeroBlock = this.props.value;
    this.watcher = inViewport(this.hero, this.visible);

    let columns = '-one-column';
    if ((value.form !== 'none') || (value.image != null)) {
      columns = '-two-column';
    }

    let background;
    if (value.decoration.background_image != null) {
      background = {
        backgroundColor: `rgba(${value.decoration.background_color})`,
        backgroundImage: `url(${value.decoration.background_image.thumbs.original})`,
      };
    } else {
      background = {
        backgroundColor: `rgba(${value.decoration.background_color})`,
      };
    }

    /* checks if the menu is opened or closed and changes the class depending
    on the case */
    const menu = (this.state.slide !== this.props.slide && window.innerWidth >= 1024)
      ? 'menu-open'
      : 'menu-close';

    return (
      <div
        className='hero fadeUp' style={background}
        ref={(hero) => { this.hero = hero; }}
      >
        <div className={`hero-container ${menu}`}>
          <div className={`container${columns}`}>
            <h5>{value.subtitle}</h5>
            <h1 className='jumbo'>{value.title}</h1>
            <div className='paragraph'>
              <p>{value.paragraph}</p>
            </div>
            <div
              className={`cta-container${value.cta.text || value.extra_cta.text ? '-show' : '-hide'}`}
            >
              <CTAComponent {...value.cta} toPage={this.props.toPage} />
              <CTAComponent {...value.extra_cta} toPage={this.props.toPage} />
            </div>
          </div>
          <div className={`container${columns}`}>
            { this.renderImage(value.image) }
          </div>
          <div className={`division-rectangle rectangle-${menu}`} />
        </div>
      </div>
    );
  }
}

export default Hero;
