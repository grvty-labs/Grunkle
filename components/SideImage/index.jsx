// @flow
import * as React from 'react';
import inViewport from 'in-viewport';

import CTAComponent from '../CTA';
import type { BlockComponentProps } from '../../flowTypes/pages';
import type { SideImageBlock } from '../../flowTypes/blocks';
import type { ThumbedImageField } from '../../flowTypes/fields';

type State = {
  show: boolean,
  slide: boolean,
};

class sideImage extends React.Component <void, BlockComponentProps, State > {
  constructor(props: BlockComponentProps) {
    super(props);
    (this: any).fadeUp = this.fadeUp.bind(this);
    (this: any).renderImage = this.renderImage.bind(this);
  }

  state = {
    show: false,
    slide: this.props.slide,
  };

  componentDidMount() {
    this.watcher = inViewport(this.div, this.fadeUp);
  }

  div: HTMLDivElement;
  image: HTMLImageElement;
  watcher: ?any;

  fadeUp() {
    if (this.watcher && this.image) {
      const img: HTMLImageElement = this.image.lastElementChild;
      this.watcher.dispose();
      this.setState({ show: true });

      const tempImg = new Image();
      tempImg.src = img.src;
      tempImg.onload = () => {
        this.image.style.backgroundColor = 'transparent';
        this.image.style.transition = 'all 1s ease';
        img.style.opacity = '1';
      };
    }
  }

  renderImage(inline: boolean, menu: string, image: ThumbedImageField) {
    if (inline) {
      return (
        <picture
          className={`image ${menu}`}
          ref={(img) => { this.image = img; }}
        >
          <source media='(max-width:1024px)' srcSet={image.thumbs.sm} />
          <source media='(min-width:1024px)' srcSet={image.thumbs.md} />
          <img src={image.thumbs.original} alt={image.title} />
        </picture>
      );
    }
    return (
      <div
        className='image-container'
        ref={(img) => { this.image = img; }}
        style={{ backgroundImage: `url(${image.thumbs.original})` }}
      />
    );
  }

  render() {
    const value: SideImageBlock = this.props.value;

    const menu = (this.state.slide !== this.props.slide && window.innerWidth >= 1024)
      ? 'menu-open'
      : 'menu-close';

    const inverse = value.side === 'right'
      ? 'inverse'
      : 'normal';

    const imageRender = this.renderImage(value.inline, menu, value.image);

    return (
      <div
        className={`sideImage ${inverse} ${value.inline ? 'inline' : 'not-inline'}`}
        style={{ backgroundColor: `rgba(${value.decoration.background_color})` }}
      >
        <div className='column column-image'>
          {imageRender}
          <div className='division-rectangle' />
        </div>

        <div className='column column-text'>
          <div
            className={`container-text fadeUp ${menu} ${this.state.show ? 'play' : ''}`}
            ref={((fUp) => { this.div = fUp; })}
          >
            <h5>{value.subtitle}</h5>
            <h2>{value.title}</h2>
            <p>{value.paragraph}</p>
            <CTAComponent {...value.cta} toPage={this.props.toPage} />
          </div>
        </div>
      </div>
    );
  }
}

export default sideImage;
