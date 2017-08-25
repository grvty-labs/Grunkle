// @flow
import * as React from 'react';
import inViewport from 'in-viewport';
import type { CTAField } from '../../flowTypes/fields';

type Props = {
  toPage: Function,
} & CTAField;

class CTAComponent extends React.Component<void, Props, void> {
  constructor(props: Props) {
    super(props);
    (this: any).colorUp = this.colorUp.bind(this);
  }

  ctaAnimation: HTMLDivElement;
  buttonWatcher: ?any;

  colorUp() {
    this.ctaAnimation.style.boxShadow = 'inset 0 -100px 0 0 #31302B';
    if (this.buttonWatcher) {
      this.buttonWatcher.dispose();
    }
  }

  render() {
    const { breed, text, page, toPage, link } = this.props;
    this.buttonWatcher = inViewport(this.ctaAnimation, this.colorUp);
    const className = text !== '' ? '-show' : '-none';
    const linkAction = page
      ? (
        <div
          className={`${breed}${className}`}
          ref={((ctaAn) => { this.ctaAnimation = ctaAn; })}
          role='link' tabIndex={0}
          onClick={() => toPage(page.id, page.url)}
        >
          <span className='cta-text'>{text}</span>
          <span>{text}</span>
        </div>)
      : (
        <a
          className={`${breed}${className}`}
          ref={((ctaAn) => { this.ctaAnimation = ctaAn; })}
          target='_blank' href={link}
        >
          <span className='cta-text'>{text}</span>
          <span>{text}</span>
        </a>);

    return (
      <div className={`cta-container${className}`}>
        {linkAction}
      </div>
    );
  }
}

export default CTAComponent;
