// @flow
import * as React from 'react';

import type { BlockComponentProps } from '../../flowTypes/pages';
import type { QuoteBlock } from '../../flowTypes/blocks';
import type { ThumbedImageField } from '../../flowTypes/fields';

class Quote extends React.Component<void, BlockComponentProps, void> {
  constructor(props: BlockComponentProps) {
    super(props);
    (this: any).renderImage = this.renderImage.bind(this);
  }

  renderImage(photograph: ThumbedImageField) {
    return (
      <div className='image-container'>
        <picture className='image'>
          <source media='(max-width:768px)' srcSet={photograph.thumbs.sm} />
          <source media='(min-width:768px)' srcSet={photograph.thumbs.md} />
          <img src={photograph.thumbs.original} alt={photograph.title} />
        </picture>
        <img src='/static/assets/quote-mark.svg' className='quote-mark' alt='quote-mark' />
      </div>
    );
  }

  render() {
    const value: QuoteBlock = this.props.value;

    return (
      <div className='quote'>
        <div className='container'>
          {this.renderImage(value.photograph)}
          <div className='text'>
            <div className='text-container'>
              <h6>{value.quote}</h6>
              <div className='quoter-container'>
                <h3>{value.name }</h3>
                <p>{value.position} at {value.company}</p>
              </div>
              <div className='division-rectangle' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
