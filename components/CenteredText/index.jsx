// @flow
import * as React from 'react';
import inViewport from 'in-viewport';
import CTAComponent from '../CTA';
import type { BlockComponentProps } from '../../flowTypes/pages';
import type { CenterTextBlock } from '../../flowTypes/blocks';
import type { ThumbedImageField } from '../../flowTypes/fields';


class CenteredText extends React.Component<void, BlockComponentProps, void> {
  constructor(props: BlockComponentProps) {
    super(props);
    (this: any).visible = this.visible.bind(this);
    (this: any).renderImage = this.renderImage.bind(this);
  }

  centeredText: HTMLDivElement;
  watcher: ?any;

  visible() {
    if (this.centeredText) {
      this.centeredText.style.animation = 'fadeUp 1s ease forwards';
      this.centeredText.style.webkitAnimation = 'fadeUp 1s ease forwards';
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
    const value: CenterTextBlock = this.props.value;
    this.watcher = inViewport(this.centeredText, this.visible);


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
        className='centered-text fadeUp' style={background}
        ref={(centeredText) => { this.centeredText = centeredText; }}
      >
        <div className='centered-text-container'>
          <div className='container'>
            <h5>{value.subtitle}</h5>
            <h2>{value.title}</h2>
            <div className='paragraph'>
              <p>{value.paragraph}</p>
            </div>
            { this.renderImage(value.image) }
            <CTAComponent {...value.cta} toPage={this.props.toPage} />
          </div>
          <div className='division-rectangle' />
        </div>
      </div>
    );
  }
}

export default CenteredText;
