// @flow
import * as React from 'react';
import type { BlockComponentProps } from '../../flowTypes';
import type { ThumbedImageField } from '../../flowTypes/fields';


class CenteredText extends React.Component < void, BlockComponentProps, void > {
  renderImage(image: ThumbedImageField) {
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
    const { value } = this.props;
    const inViewport = require('in-viewport');
    const inViewport2 = require('in-viewport');
    const elem = this.centeredText;
    const ctaAnimation = this.ctaAnimation;
    const watcher = inViewport(elem, visible);
    const buttonWatcher = inViewport2(ctaAnimation, colorUp);

    function visible() {
      elem.style.animation = 'fadeUp 1s ease forwards';
      elem.style.webkitAnimation = 'fadeUp 1s ease forwards';

      watcher.dispose();
    }

    function colorUp() {
      ctaAnimation.style.boxShadow = 'inset 0 -100px 0 0 #31302B';
      buttonWatcher.dispose();
    }

    const background = (value.decoration.background_image != null)
      ? {
        backgroundColor: `rgba(${value.decoration.background_color})`,
        backgroundImage: `url(${value.decoration.background_image.thumbs.original})`,
      }
      : {
        backgroundColor: `rgba(${value.decoration.background_color})`,
      };


    let cta = '-none';
    if (value.cta.text !== '') {
      cta = '-show';
    }

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
            <div className={`cta-container ${cta}`}>
              <div
                className={value.cta.breed + cta}
                ref={(ctaAn) => { this.ctaAnimation = ctaAn; }}
              >
                <span className='cta-text'>{value.cta.text}</span>
                <span>{value.cta.text}</span>
              </div>
            </div>
          </div>
          <div className='division-rectangle' />
        </div>
      </div>
    );
  }
}

export default CenteredText;
