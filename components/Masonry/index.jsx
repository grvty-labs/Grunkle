// @flow
import * as React from 'react';
import inViewport from 'in-viewport';

import Masonry from 'react-masonry-component';
import type { BlockComponentProps } from '../../flowTypes/pages';
import type { MasonryBlock } from '../../flowTypes/blocks';
import type { MasonryImageField, ThumbedImageField } from '../../flowTypes/fields';

type State = {
  show: boolean,
};

class MasonryComponent extends React.Component<void, BlockComponentProps, State> {
  constructor(props: BlockComponentProps) {
    super(props);
    (this: any).fadeUp = this.fadeUp.bind(this);
    (this: any).renderImage = this.renderImage.bind(this);
    this.masonryOptions = {
      // resize: true,
      // transitionDuration: '0.3s',
      // initLayout: true,
    };
  }

  state = {
    show: false,
  };

  componentDidMount() {
    this.watcher = inViewport(this.div, this.fadeUp);
  }

  div: HTMLDivElement;
  masonryOptions: any;
  watcher: ?any;

  fadeUp() {
    if (this.watcher) {
      this.watcher.dispose();
      this.setState({ show: true });
    }
  }

  renderImage(masonryImage: MasonryImageField, index: number) {
    const image: ThumbedImageField = masonryImage.image;

    return (
      <div className='image-container' key={index}>
        <picture className='image'>
          <source media='(max-width:1024px)' srcSet={image.thumbs.xs} />
          <source media='(min-width:1024px)' srcSet={image.thumbs.sm} />
          <img src={image.thumbs.original} alt={image.title} />
        </picture>
        <div className='information'>
          <h6>{ masonryImage.title }</h6>
          <span>{ masonryImage.info }</span>
        </div>
      </div>
    );
  }

  // FIXME: Replace Masonry with a Custom version
  render() {
    const value: MasonryBlock = this.props.value;

    // console.log(this.props);
    const images = value.images.map(this.renderImage);

    return (
      <div className='masonry'>
        <div className='header-container'>
          <div
            className={`header fadeUp ${this.state.show ? 'play' : ''}`}
            ref={(fadeUp) => { this.div = fadeUp; }}
          >
            <div className='container'>
              <h5>{value.subtitle}</h5>
              <h2>{value.title}</h2>
              <p>{value.description}</p>
            </div>
            <div className='division-rectangle' />
          </div>
        </div>
        <div className='masonry-container'>
          <Masonry
            className={'masonry-component'}
            elementType={'div'}
            options={this.masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {images}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default MasonryComponent;
