// @flow
import * as React from 'react';
import inViewport from 'in-viewport';

import CTAComponent from '../CTA';
import type { HeroBlock } from '../../flowTypes/blocks';
import type { ThumbedImageField } from '../../flowTypes/fields';
import type { BlockComponentProps } from '../../flowTypes/pages';

type State = {
  show: boolean,
  slide: boolean,
};

class Hero extends React.Component<void, BlockComponentProps, State> {
  constructor(props: BlockComponentProps) {
    super(props);
    (this: any).fadeUp = this.fadeUp.bind(this);
    (this: any).renderImage = this.renderImage.bind(this);
  }

  state = {
    slide: this.props.slide,
    show: false,
  };

  componentDidMount() {
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

    let columns = '-one-column';
    if ((value.form !== 'none') || (value.image != null)) {
      columns = '-two-column';
    }

    let background;
    if (value.decoration.background_image) {
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
        className={`hero fadeUp ${this.state.show ? 'play' : ''}`}
        style={background} ref={(hero) => { this.div = hero; }}
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
