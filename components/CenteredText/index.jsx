// @flow
import * as React from 'react';
import inViewport from 'in-viewport';
import CTAComponent from '../CTA';
import type { BlockComponentProps } from '../../flowTypes/pages';
import type { CenterTextBlock } from '../../flowTypes/blocks';
import type { ThumbedImageField } from '../../flowTypes/fields';

type State = {
  show: boolean,
};

class CenteredText extends React.Component<void, BlockComponentProps, State> {
  constructor(props: BlockComponentProps) {
    super(props);
    (this: any).fadeUp = this.fadeUp.bind(this);
    (this: any).renderImage = this.renderImage.bind(this);
  }

  state = {
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
        className={`centered-text fadeUp ${this.state.show ? 'play' : ''}`}
        style={background} ref={(div) => { this.div = div; }}
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
